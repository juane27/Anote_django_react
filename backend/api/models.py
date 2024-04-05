from django.db import models


# Create your models here.
class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True) #Cada ve que se guarda, se actualiza
    created = models.DateTimeField(auto_now_add=True) #Solo cuando se crea guarda la fecha
    

    def __str__(self):
        return self.body[0:50]