from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import TodoItem

from rest_framework.decorators import api_view
from rest_framework.response import Response

# from .serializers import TodoSerializer

def index(request):
    return HttpResponse(TodoItem.objects.all())
