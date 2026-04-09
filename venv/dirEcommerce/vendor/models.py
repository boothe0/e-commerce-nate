from django.db import models

# Create your models here.
class Vendor(models.Model):
    vendor_name = models.CharField(max_length=100, primary_key=True)
    vendor_email = models.EmailField()
    vendor_phone = models.CharField(max_length=20)
