from django.urls import path
from .views import manual, product, result, home, truckType, solve_detail, solve_list

urlpatterns = [
    path('', home, name="home"),
    path('manual/', manual, name="manual"),
    path('result/', result, name="result"),
    path('product/', product, name="product"),
    path('truckType/', truckType, name="truckType"),
    path('solve/<int:solve_id>/', solve_detail, name='solve_detail'),
    path('solves/', solve_list, name='solves'),

]