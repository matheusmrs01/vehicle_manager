# Generated by Django 4.2.2 on 2023-06-15 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('brand', models.CharField(max_length=150)),
                ('model', models.CharField(max_length=150)),
                ('value', models.FloatField()),
                ('image', models.ImageField(upload_to='vehicle_images')),
            ],
        ),
    ]
