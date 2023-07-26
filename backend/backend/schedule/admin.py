from django.contrib import admin

# Register your models here.
from .models import TodoItem

class TodoItemAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "description", "dueDate")

admin.site.register(TodoItem, TodoItemAdmin)