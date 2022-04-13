from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *


# ViewSets are DRF magic
# ViewSets will handle incoming requests from the client, process them, and send JSON responses
# handles List, Create, Detail, Update, Partial Update, Delete

class TaskListViewSet(ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    # http_method_names = ["POST"]

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

