from rest_framework import generics
from books.models import Book
from .serializers import BookSerialiszer
# Create your views here.

class BookAPIView(generics.ListAPIView):
    queryset = Book.objects.all() # Return all book instances
    serializer_class = BookSerialiszer