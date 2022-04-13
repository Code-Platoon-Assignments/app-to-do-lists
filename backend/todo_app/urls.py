from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

# create router instance
router = DefaultRouter()

# add in the views sets that will manage resource actions
router.register("task-lists", TaskListViewSet, basename="task-list")
router.register("tasks", TaskViewSet, basename="task")

# generate urls
urlpatterns = [
    path("", include(router.urls)),
]