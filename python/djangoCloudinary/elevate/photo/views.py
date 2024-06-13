from django.shortcuts import render
from . models import library

# Create your views here.
def index(request):
    # import all photo and save to database
    photo = library.objects.all()
    cloudinary_image = {'photo':photo}
    return render(request,'photo/index.html',cloudinary_image)