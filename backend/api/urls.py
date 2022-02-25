from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path("category", CategoryApiView),
    path("category/<int:pk>", CategoryDetailApiView),
    path("product", ProductApiView),
    path("product/<int:pk>", ProductDetailApiView),
]
