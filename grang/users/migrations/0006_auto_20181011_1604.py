# Generated by Django 2.0.8 on 2018-10-11 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20180926_0247'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='category1',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='category2',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='category3',
            field=models.CharField(max_length=255, null=True),
        ),
    ]