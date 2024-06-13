from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=75)
    password = models.CharField(max_length=20)
    slug=models.SlugField()
    date=models.DateTimeField(auto_now_add=True)
    profile=models.ImageField(default='fallback.png',blank=True)

    def __str__(self):
        return self.name