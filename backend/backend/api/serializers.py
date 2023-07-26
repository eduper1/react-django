from rest_framework import serializers
from schedule.models import TodoItem

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = '__all__'
