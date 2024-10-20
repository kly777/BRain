# Generated by Django 5.0.7 on 2024-08-10 09:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('Card', '0003_alter_card_parent'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='card',
            name='parent',
        ),
        migrations.AlterField(
            model_name='relation',
            name='child',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parents',
                                    to='Card.card'),
        ),
        migrations.AlterField(
            model_name='relation',
            name='parent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='children',
                                    to='Card.card'),
        ),
    ]
