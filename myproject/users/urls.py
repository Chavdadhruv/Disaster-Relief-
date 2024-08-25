# users/urls.py
from django.urls import path
from .views import login_user

# users/urls.py
from .views import reset_password_request

urlpatterns = [
    path('reset-password/', reset_password_request, name='reset_password_request'),
]
