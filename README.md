# Estrutura base
[![laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=ffffff)](https://laravel.com/) [![vite](https://img.shields.io/badge/Vite-593D88?style=for-the-badge&logo=vite&logoColor=ffffff)](https://vitejs.dev/config/) [![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.reactjs.org/) [![tailwindcss](https://img.shields.io/badge/tailwindcss-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white
)](https://tailwindcss.com/) [![inertiajs](https://img.shields.io/badge/inertiajs-8F61EC?style=for-the-badge&logo=plex&logoColor=white
)](https://inertiajs.com/) [![tailwindcss](https://img.shields.io/badge/tailwindcss-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white
)](https://tailwindcss.com/)

 Uma estrutura para usar como base em projetos utilizando as tecnologias descritas acima!

 ## ❓ Intuito do projeto
Eu montei esse projeto apenas para estudar, espero que assim como os muitos projetos que ja encontrei aqui me ajudaram, esse projeto possa ajudar você também :)

## ⚠️ Aviso
Para que tudo funcione corretamente, você precisa ter o **Composer** mais recente, **PHP 8** e o **NodeJS v16** instalado.

## 🚀 Vamos começar?
Caso deseje testar esse projeto, siga os passos abaixo!

**Frontend**

+ Primeiro clone este repositório 
    ```jsx
    git clone https://github.com/linhous/laravel-vite-react-typescript.git
    ```
+ Entre na pasta laravel-vite-react-typescript
    ```jsx
    cd laravel-vite-react-typescript
    ```
+ Execute yarn para instalar as dependências 
    ```jsx
    yarn
    ```
**Backend**

+ Utilize o arquivo .env-example para criar um arquivo .env (pode-se copiar o arquivo examplo mantendo apenas o nome .env), aproveite para configurar o banco de dados.

+ Atualize os pacotes através do composer
    ```php
    composer install
    ```

+ Após a instalação, execute o comando para gerar a chave do Laravel
    ```php
    php artisan key:generate
    ```

+ Aproveite para popular o banco de dados com a estrutura atual
    ```php
    php artisan migrate
    ```

+ **Finalizando**
  Agora você só precisa iniciar os dois serviços:
    ```php
    php artisan serve
    ```
    ```jsx
    yarn dev
    ```
    Feito isso, você pode acessar a rota /register para se registrar e aproveitar a estrutura.

    **Dica**
    Você pode usar o comando:
    ```php
    php artisan route:list
    ```
    Veja as rotas disponíveis no projeto.