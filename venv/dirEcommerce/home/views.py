from django.shortcuts import render
from .models import Item
from vendor.models import Vendor

# Create your views here.
def home (request):
    items = Item.objects.all()
    vendors = Vendor.objects.all()
    context = {'items': items, 'vendors': vendors}
    return render(request, 'home/home.html', context)