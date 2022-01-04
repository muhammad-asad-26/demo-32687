from django.conf import settings
from django.db import models


class Address(models.Model):
    "Generated Model"
    city = models.CharField(
        max_length=256,
    )
    country = models.CharField(
        max_length=256,
    )
