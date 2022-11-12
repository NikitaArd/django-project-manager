# Generated by Django 4.1.3 on 2022-11-12 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager_app', '0003_customuser_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_avatar',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='manager_app.avatar', verbose_name='Avatar użytkownika'),
        ),
    ]
