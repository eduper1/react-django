from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import TodoItem


def index(request):
    return HttpResponse(TodoItem.objects.all())
