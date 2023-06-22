from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import TodoItem

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TodoSerializer

def index(request):
    return HttpResponse(TodoItem.objects.all())


@api_view(['GET', 'POST'])
def todo_list(request):
    if request.method == 'GET':
        todos = TodoItem.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
