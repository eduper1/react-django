from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from schedule.models import TodoItem   
from .serializers import TodoSerializer
from django.shortcuts import get_object_or_404


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
    
@api_view(['PUT','GET'])
def update_schedule(request, schedule_id):
    # Query for requested schedule
    schedule = get_object_or_404(TodoItem, pk=schedule_id)
    print(schedule)
    if request.method == 'PUT':
        # Extract the isCompleted data from request.data
        is_completed = request.data.get('isCompleted')
        
        # Update the isCompleted field of the schedule object
        schedule.isCompleted = is_completed
        # schedule.save()
       
        schedule_serializer = TodoSerializer(schedule, data={'isCompleted': is_completed}, partial=True)
        if schedule_serializer.is_valid():
            schedule_serializer.save()
            return Response({"message": "isCompleted field updated successfully."}, status=200)
        return Response(schedule_serializer.errors, status=400)
        # return Response({"message": "isCompleted field updated successfully."}, status=200)

    elif request.method == 'GET':
        # todos = TodoItem.objects.all()
        serializer = TodoSerializer(schedule)
        return Response(serializer.data)

@api_view(['DELETE'])
def delete_schedule(request, id):
    schedule = get_object_or_404(TodoItem, pk=id)
    if request.method == 'DELETE':
        schedule.delete()
        return Response({"message": f"Schedule with ID {id} has been deleted."}, status=204)