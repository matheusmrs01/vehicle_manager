from django.db import models

# Create your models here.


class Vehicle(models.Model):
    name = models.CharField(max_length=150)
    brand = models.CharField(max_length=150)
    model = models.CharField(max_length=150)
    value = models.FloatField()
    image = models.ImageField(upload_to='vehicle_images')

    def __str__(self):
        return self.name + ' - ' + self.brand

