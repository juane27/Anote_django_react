from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model= Note
        fields = '__all__'  #aca puedo agregar solo un campo como body
        