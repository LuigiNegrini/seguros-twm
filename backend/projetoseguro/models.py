from django.db import models

class Client(models.Model):
    nome = models.CharField(max_length=200)    
    cpf = models.IntegerField()
    email = models.CharField(max_length=200)