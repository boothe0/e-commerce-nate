from django.db import models
class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2 )
    description = models.TextField()
    sale = models.BooleanField(default=False)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)   
    stock = models.IntegerField()

    def __str__(self):
        return self.name