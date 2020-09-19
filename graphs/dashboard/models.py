from django.db import models


# Create your models here.
class UploadedImage(models.Model):
    src = models.ImageField(upload_to='static/images')
