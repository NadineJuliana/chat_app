from django.shortcuts import render
from .models import Chat
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def chat_view(request):
    if request.method == "GET":

        chats = Chat.objects.all().values()

        return JsonResponse(list(chats), safe=False)

    elif request.method == "POST":

        data = json.loads(request.body)

        chat = Chat.objects.create(
            name=data["name"],
            message=data["message"]
        )

        return JsonResponse({
            "message": "Message created successfully",
        })
