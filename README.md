# Vehicle Manager

Esse é um projeto utilizando django-rest-framework para o backend e o angular para o frontend.

## Backend
Para iniciar o backend, deve ser seguido esse passo a passo:
- python manage.py makemigrations
- python manage.py migrate
- python manage.py createsuperuser

OBS: O ultimo comando é utilizado para criar um super usuário, com ele você vai ter acesso ao django admin.

OBS: Só vai ser possivel adicionar novos veiculos se o usuário estiver logado, então, é muito importante que seja realizado esses 3 pontos.

## Frontend
Para rodar o frontend é bastante simples, deve ser seguido esses passo a passo:
- npm install
- npm start

OBS: Vai ser aberto um servidor de teste na porta 4200 (http://localhost:4200/).

OBS: Lembrando que é necessario rodar os dois servidores (tanto back quanto front) para que o sistema funcione.
