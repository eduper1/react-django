
# Create your models here.
from django.db import models

class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    dueDate = models.DateField(blank=False)
    isCompleted = models.BooleanField(default=False)
    reschedule_count = models.PositiveIntegerField(default=0)
    def __str__(self):
        return f"{self.title}{self.reschedule_count}{self.description}{self.created_at}{self.dueDate}{self.isCompleted}"

    def reschedule(self):
        self.reschedule_count += 1
        self.save()