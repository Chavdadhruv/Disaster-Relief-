# users/views.py
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
import json

def reset_password_request(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        user = User.objects.filter(email=email).first()

        if user:
            token = default_token_generator.make_token(user)
            reset_link = f"{settings.FRONTEND_URL}/reset-password/?token={token}&uid={user.pk}"
            send_mail(
                'Password Reset Request',
                f'Click the following link to reset your password: {reset_link}',
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            return JsonResponse({'message': 'Password reset link sent'}, status=200)
        return JsonResponse({'error': 'User with this email does not exist'}, status=404)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
