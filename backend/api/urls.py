# api/urls.py

from django.urls import path
from .views import CustomTokenObtainPairView, CreateUserView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name='register'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
