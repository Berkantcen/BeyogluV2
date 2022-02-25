from django.db import models
from django.forms import ValidationError

class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey(
        "Category", related_name="sub_categories", blank=True, on_delete=models.CASCADE
        )
    sub_message = models.TextField(blank=True)
    image = models.TextField(blank=True)
    bg = models.TextField(blank=True)
    
    def save(self, *args, **kwargs):
        if self.parent and self.parent.id == self.id:
            raise ValidationError("parent kendisine eşit olamaz!")
        return super(Category, self).save(*args, **kwargs)
    
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    sub_message = models.TextField(blank=True)
    category = models.ForeignKey(
        "Category", related_name="items", on_delete=models.CASCADE
        )
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.name