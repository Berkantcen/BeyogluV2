from django.shortcuts import render
from django.http import HttpResponse


from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import *
from .serializer import *

#jwt sistemi entegre edilmediği için sadece get işlemleri açıktır


@api_view(["GET"])
def CategoryApiView(req):
    if req.method == "GET":
        categories = Category.objects.filter(parent=None)
        data = CategorySerializer(categories, many=True)
        return Response(data.data)
    
    # if req.method == "POST":
    #     serializer = CategorySerializer(data=req.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
    
   
@api_view(["GET"]) 
def CategoryDetailApiView(req, pk):
    try:
        category_instance = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response(
            {
                "errors" : {
                    "code" : 404,
                    "message" : f"Böyle bir id ({pk}) ile ilgili categori bulunamadı!"
                }
            }
        )

    if req.method == "GET":
        data = CategorySerializer(category_instance)
        return Response(data.data)
    
    # if req.method == "PUT":
    #     serializer = CategorySerializer(category_instance, data=req.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
    
    # if req.method == "DELETE":
    #     category_instance.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(["GET"])
def ProductApiView(req):
    if req.method == "GET":
        products = Product.objects.filter()
        data = ProductSerializer(products, many=True)
        return Response(data.data)
    
    # if req.method == "POST":
    #     serializer = ProductSerializer(data=req.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["GET"]) 
def ProductDetailApiView(req, pk):
    try:
        product_instance = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(
            {
                "errors" : {
                    "code" : 404,
                    "message" : f"Böyle bir id ({pk}) ile ilgili ürün bulunamadı!"
                }
            }
        )

    if req.method == "GET":
        data = ProductSerializer(product_instance)
        return Response(data.data)
    
    # if req.method == "PUT":
    #     serializer = ProductSerializer(product_instance, data=req.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
    
    # if req.method == "DELETE":
    #     product_instance.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)