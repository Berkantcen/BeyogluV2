from .models import *
from rest_framework import serializers

class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price = serializers.FloatField()
    sub_message = serializers.CharField(required=False, allow_null=True)
    category_id = serializers.IntegerField()
    description = serializers.CharField(required=False, allow_null=True)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.price = validated_data.get("price", instance.price)
        instance.sub_message = validated_data.get("sub_message", instance.sub_message)
        
        category_id = validated_data.get("category_id", None)
        try:
            instance.category = Category.objects.get(pk=category_id)
        except:
            raise serializers.ValidationError(self.errors)
        instance.description = validated_data.get("description", instance.description)
        instance.save()
        
        return instance


class SubCategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    items = ProductSerializer(many=True, read_only=True, required=False)

        

  
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    sub_categories = SubCategorySerializer(many=True, read_only=True)
    parent_id = serializers.IntegerField(required=False, allow_null=True)
    sub_message = serializers.CharField(required=False, allow_null=True)
    image = serializers.CharField(required=False, allow_null=True)
    bg = serializers.CharField(required=False, allow_null=True)
    items = ProductSerializer(many=True, read_only=True)
    
    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        parent_id = validated_data.get("parent_id", None)
        
        if parent_id:
            try:
                instance.parent = Category.objects.get(pk=parent_id)
            except:
                raise serializers.ValidationError(self.errors)
        else:
            instance.parent_id = parent_id
        
        instance.sub_message = validated_data.get("sub_message", instance.sub_message)
        instance.image = validated_data.get("image", instance.image)
        instance.bg = validated_data.get("bg", instance.bg)
        instance.save()
        
        return instance
    
