from ..forms import TruckTypeForm
from django.shortcuts import render, redirect


def truckType(request):
    if request.method == 'POST':
        form = TruckTypeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('truckType')
    else:
        form = TruckTypeForm()
        return render(request, 'solver/truckType.html', {'form': form})    