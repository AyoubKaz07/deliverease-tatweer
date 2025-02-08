from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from ..models import Product, TruckType, SolveRecord
import json
import plotly.graph_objects as go
import plotly.offline as opy
from ..solver import Solver
from pulp import *
pulp.LpSolverDefault.msg = False

import numpy as np
import random
import time


def home(request):
    return render(request, "solver/home.html", {})

def manual(request):
            
    availableProducts = Product.objects.all()
    availableTruckTypes = TruckType.objects.all()
    
    context = {
        'availableProducts': availableProducts,
        'availableTruckTypes': availableTruckTypes,
    }
    
    return render(request, "solver/manual.html", context=context)
    
def result(request):
    
    numberOfProducts = json.loads(request.POST.get('numberOfProducts'))
    numberOfTruckTypes = json.loads(request.POST.get('numberOfTruckTypes'))
    productVolumes = json.loads(request.POST.get('productVolumes'))
    productDemandQuantity = json.loads(request.POST.get('productDemandQuantity'))
    truckTypeCapacities = json.loads(request.POST.get('truckTypeCapacities'))
    numberOfTrucksPerType = json.loads(request.POST.get('numberOfTrucksPerType'))


    if (productVolumes == [] or productDemandQuantity == [] or truckTypeCapacities == [] or numberOfTrucksPerType == []):
        messages.error(request, "Please fill in all the information")
        return render(request, "solver/manual.html", {})
    
    prob = LpProblem("Truck_Loading_Problem", LpMinimize)
    solver = Solver(numberOfProducts=numberOfProducts, 
                    numberOfTruckTypes=numberOfTruckTypes,
                    prob=prob,
                    productVolumes=productVolumes,
                    productDemandQuantity=productDemandQuantity,
                    truckTypeCapacities=truckTypeCapacities,
                    numberOfTrucksPerType=numberOfTrucksPerType
                )
    
    solution = solver.getSolution()
    status = LpStatus[prob.status]
    canShowTable = status == 'Optimal'
    averageFillRate = getAverageFillRate(solution)
    
    if solution:
    
        SolveRecord.objects.create(
            solution_data=solution,
            average_fill_rate=averageFillRate,
            status=status,
            number_of_products=numberOfProducts,
            number_of_truck_types=numberOfTruckTypes,
            truck_names=solver.getTruckTypeNames(),
            number_of_trucks_per_type=numberOfTrucksPerType
        )

    
    trucksUsedBarPlot = getBarChart(solution)
    truckFillRateBarPlot = getFillRateBarChart(solution, solver.getTruckTypeNames(), numberOfTrucksPerType)

    context = {
        'solution': solution,
        'averageFillRate': averageFillRate,
        'status': status,
        'numberOfProducts': range(numberOfProducts),
        'canShowTable': canShowTable,
        'trucksUsedBarPlot': trucksUsedBarPlot,
        'truckFillRateBarPlot': truckFillRateBarPlot
    }
    return render(request, "solver/result.html", context)



def getAverageFillRate(solution):
    if solution is None:
        return None
    
    sumOfFillRate = 0
    usedTrucksCount = 0
    
    for value in solution.values():
        sumOfFillRate += max(value[-1], 0)
        usedTrucksCount += 1 if value[-1] > 0 else 0

    return round((sumOfFillRate / usedTrucksCount), 2)


def getBarChart(solution):
    if solution is None:
        return None
    
    x = ['Used', 'Not used']
    usedTrucksCount = sum(1 if value[-1] > 0 else 0 for value in solution.values())
    y = [usedTrucksCount, len(solution) - usedTrucksCount]
    
    fig = go.Figure(data=go.Bar(x=x, y=y))
    fig.update_layout(
        title='Trucks usage comparison',
        title_x=0.5,
        xaxis_title='Trucks',
        yaxis_title='Number of trucks',
    )
    return opy.plot(fig, auto_open=False, output_type='div')


def getFillRateBarChart(solution, truckTypeNames, numberOfTrucksPerType):
    if solution is None:
        return None
    
    x = truckTypeNames
    y = np.zeros(len(truckTypeNames))
    
    for key, value in solution.items():
        truckTypeName = key.split("_")[0] + "_" + key.split("_")[1]
        truckTypeIndex = x.index(truckTypeName)
        y[truckTypeIndex] += max(value[-1], 0)
        
    y /= numberOfTrucksPerType
    
    fig = go.Figure(data=go.Bar(x=x, y=y))
    fig.update_layout(
        title='Fill rate average per truck type',
        title_x=0.5,
        xaxis_title='Trucks',
        yaxis_title='Average fill rate',
    )
    return opy.plot(fig, auto_open=False, output_type='div')
        

def solve_detail(request, solve_id):
    solution = get_object_or_404(SolveRecord, id=solve_id)

    trucksUsedBarPlot = getBarChart(solution.solution_data)
    truckFillRateBarPlot = getFillRateBarChart(solution.solution_data, solution.truck_names, solution.number_of_trucks_per_type)


    context = {
        'solution': solution.solution_data,
        'averageFillRate': solution.average_fill_rate,
        'status': solution.status,
        'numberOfProducts': range(solution.number_of_products),
        'canShowTable': True,
        'trucksUsedBarPlot': trucksUsedBarPlot,
        'truckFillRateBarPlot': truckFillRateBarPlot
    }
    
    return render(request, "solver/result.html", context)

def solve_list(request):
    solves = SolveRecord.objects.all().order_by('-timestamp')
    
    context = {
        'solves': solves
    }
    
    return render(request, 'solver/solve_list.html', context)
