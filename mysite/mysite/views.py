from django.shortcuts import render

def main(request):
  return render(request, 'main.html')
def shift(request):
  return render(request, 'sub1.html')
def kimchi(request):
  return render(request, 'sub2.html')