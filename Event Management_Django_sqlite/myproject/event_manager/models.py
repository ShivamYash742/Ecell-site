from django.db import models

class Event(models.Model):
    link = models.URLField()
    description = models.TextField()
    image = models.URLField()

    def __str__(self):
        return self.description
