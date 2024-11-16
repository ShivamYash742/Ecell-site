from django.shortcuts import render
from .models import Event
from django.http import JsonResponse

def home(request):
    return render(request, 'event_manager/home.html')

def events_page(request):
    events = Event.objects.all()
    return render(request, 'event_manager/events.html', {'events': events})

def admin_page(request):
    return render(request, 'event_manager/admin.html')

def create_event(request):
    if request.method == 'POST':
        link = request.POST['link']
        description = request.POST['description']
        image = request.POST['image']
        event = Event(link=link, description=description, image=image)
        event.save()
        return JsonResponse({'id': event.id, 'link': event.link, 'description': event.description, 'image': event.image})
