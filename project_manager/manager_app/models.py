from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import pre_save

from .managers import CustomUserManager

class CustomUser(AbstractUser):
    username = models.CharField(max_length=80, blank=True, verbose_name='Username użytkownika', default='Username')
    email = models.EmailField(unique=True, blank=False, null=False, verbose_name='email użytkownika')

    first_name = models.CharField(max_length=40, blank=False, verbose_name='Imię użytkownika')
    second_name = models.CharField(max_length=40, blank=False, verbose_name='Nazwisko użytkownika')

    registration_datatime = models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Data rejestracji')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self) -> str:
        return '{} | {}'.format(self.username, self.email)

def pre_save_user_dispatcher(sender, **kwargs):
    kwargs['instance'].username = '{} {}'.format(kwargs['instance'].first_name, kwargs['instance'].second_name)

pre_save.connect(pre_save_user_dispatcher, sender=CustomUser)
