# Generated by Django 2.0.8 on 2018-09-28 16:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0004_auto_20180928_0141'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-created_at']},
        ),
    ]