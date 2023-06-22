from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('api/todos/', views.todo_list, name='todo-list'),
]