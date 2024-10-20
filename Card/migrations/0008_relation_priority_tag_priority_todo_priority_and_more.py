# Generated by Django 5.0.7 on 2024-09-14 12:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Card', '0007_review_delete_remember'),
    ]

    operations = [
        migrations.AddField(
            model_name='relation',
            name='priority',
            field=models.IntegerField(default=7),
        ),
        migrations.AddField(
            model_name='tag',
            name='priority',
            field=models.IntegerField(default=7),
        ),
        migrations.AddField(
            model_name='todo',
            name='priority',
            field=models.IntegerField(default=7),
        ),
        migrations.AlterField(
            model_name='relation',
            name='type',
            field=models.CharField(max_length=99),
        ),
        migrations.AlterField(
            model_name='todo',
            name='card',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='todos', to='Card.card'),
        ),
    ]
