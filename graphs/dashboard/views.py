from django.shortcuts import render

from .forms import UploadedImageForm


# Create your views here.
def graphs_dashboard_view(request):
    form = UploadedImageForm()
    uploaded_image = None

    if request.method == 'POST':
        form = UploadedImageForm(request.POST, request.FILES)

        if form.is_valid():
            uploaded_image = form.save()

    return render(request, 'graphs_dashboard.html', {
        'form': form,
        'uploaded_image': uploaded_image
    })
