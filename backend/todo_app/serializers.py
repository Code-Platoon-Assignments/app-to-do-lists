from rest_framework import serializers
from .models import *


class TaskListSerializer(serializers.ModelSerializer):
    class Meta: # MUST be named "Meta"
        model = TaskList
        fields = ["id", "name", "description", "all_done", "tasks"]

    
    all_done = serializers.SerializerMethodField(read_only=True)
    # SerializerMethodField() ... this means my data value will come from a method (function)

    def get_all_done(self, instance): # MUST be name get_[whatever]
        return instance.get_all_tasks_complete()


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "task", "list", "due_date", "is_completed"]

    
