# from django.http import HttpResponse
from django.shortcuts import render

# def homepage(request):
#     return HttpResponse("Hello world! I'm Home.")

# def about(request):
#     return HttpResponse("Abut page.")
def homepage(request):
    return render(request,'home.html')

def about(request):
        return render(request,'about.html')
