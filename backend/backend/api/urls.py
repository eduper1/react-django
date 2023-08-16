from django.urls import path
from . import views

urlpatterns = [
    path('', views.todo_list, name="todo_list"),
    path('<int:schedule_id>', views.update_schedule, name='update_schedule'),
    path('delete/<int:id>', views.delete_schedule, name='delete_schedule'),
]