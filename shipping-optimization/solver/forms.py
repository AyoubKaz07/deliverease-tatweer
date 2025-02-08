from .models import Product, TruckType
from django import forms


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'volume']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'volume': forms.NumberInput(attrs={'class': 'form-control'}),   
        }
        
class TruckTypeForm(forms.ModelForm):
    class Meta:
        model = TruckType
        fields = ['name', 'capacity']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'capacity': forms.NumberInput(attrs={'class': 'form-control'}),
        }