from ..forms import ProductForm
from django.shortcuts import render, redirect


def product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product')
    else:
        form = ProductForm()
        return render(request, 'solver/product.html', {'form': form})    