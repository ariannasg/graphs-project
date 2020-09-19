#!usr/bin/env python3

from django import forms

from .models import UploadedImage


class UploadedImageForm(forms.ModelForm):
    class Meta:
        model = UploadedImage
        fields = ['src']
