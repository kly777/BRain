# Generated by Django 5.0.7 on 2024-09-12 05:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Card', '0004_remove_card_parent_alter_relation_child_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='priority',
            field=models.IntegerField(default=7),
        ),
        migrations.CreateModel(
            name='Remember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.IntegerField(default=0)),
                ('time', models.DateTimeField(null=True)),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Card.card')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='Card.card')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tags', to='Card.card')),
            ],
        ),
        migrations.CreateModel(
            name='Time',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.IntegerField(default=0)),
                ('full_time', models.BooleanField(default=False)),
                ('start', models.DateTimeField(null=True)),
                ('end', models.DateTimeField(null=True)),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Card.card')),
            ],
        ),
    ]
