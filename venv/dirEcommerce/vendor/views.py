from django.shortcuts import render
from .models import Vendor
# Create your views here.
def vendor (request):
    vendors = Vendor.objects.all()
    context = {'vendors': vendors}
    return render(request, 'vendor/vendor.html', context)