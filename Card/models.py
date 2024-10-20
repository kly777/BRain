from django.db import models


class Card(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
    priority = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Relation(models.Model):
    child = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='parents')
    parent = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='children')
    priority = models.IntegerField(default=0)
    type = models.CharField(max_length=99, default='')
    description = models.TextField(blank=True)

    class Meta:
        unique_together = ('parent', 'child', 'type')


class Tag(models.Model):
    tag = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='tags')
    card = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='cards')
    priority = models.IntegerField(default=0)

    class Meta:
        unique_together = ('tag', 'card')

    def __str__(self):
        return self.tag.title


class ToDo(models.Model):
    card = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='todos')
    state = models.IntegerField(default=0)
    full_time = models.BooleanField(default=False)
    start = models.DateTimeField(blank=True, null=True, default=None)
    end = models.DateTimeField(blank=True, null=True, default=None)
    priority = models.IntegerField(default=0)

    def __str__(self):
        return self.card.title


class Review(models.Model):
    card = models.OneToOneField(
        Card, on_delete=models.CASCADE, related_name='reviews')
    state = models.IntegerField(default=0)
    time = models.DateTimeField(null=True)

    def __str__(self):
        return self.card.title

    class Meta:
        unique_together = ('card', 'time', 'state')
