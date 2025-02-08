from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    volume = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class TruckType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    capacity = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
class SolveRecord(models.Model):
    id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    number_of_products = models.IntegerField()
    number_of_truck_types = models.IntegerField()
    status = models.CharField(max_length=50)  # Optimal, Infeasible, etc.
    average_fill_rate = models.FloatField(null=True, blank=True)
    execution_time = models.FloatField(null=True, blank=True)
    solution_data = models.JSONField()  # Store raw solution details
    truck_names = models.JSONField()  # Store truck names
    number_of_trucks_per_type=models.JSONField()  