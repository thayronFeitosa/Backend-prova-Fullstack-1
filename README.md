# Lumen PHP Framework
<h1>Configuraçes iniciais</h1>
<p>
    Para iniciar o projeto e necessário que o PHP 7.4 e o composer instalado
    <br/>
    Agora dentro da pasta raiz do projeto e necesário criar a conexão com o banco de dados no arquivo .inv como o exemplo abaixo.
    
    
    APP_NAME=Lumen
    APP_ENV=local
    APP_KEY=
    APP_DEBUG=true
    APP_URL=http://localhost
    APP_TIMEZONE=UTC

    LOG_CHANNEL=stack
    LOG_SLACK_WEBHOOK_URL=

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=bancoProva
    DB_USERNAME=root
    DB_PASSWORD=root123

    CACHE_DRIVER=file
    QUEUE_CONNECTION=sync

    JWT_KEY=uma_chave_muito_secreta123

    JWT_SECRET=w66eSGm0UwTv0mUl9Wf1wSKiREAth2F5Y91PccPCWig1Alv0Pa2yNLzKQEs3bZy8
    
    
   depois de fazer esses passos e hora de baixar as dependencias do projeto usando o comando 
   ```
        composer install
   ```

´É muito importante que o banco de dados esteja criado para que a aplicação possa se comunicar com o banco.
<br/><br/>
    <h3> Criando as tabelas no banco de dados</h3>
    Para criar as tabelas no banco de dados basta rodar o comando 
 ``` 
    php artisan migrate
```  
  <h3>Aplicação</h3>
  <p>Aaplicação deverá acessar a porta 8080 </P>
  
  ```
  php -S localhost:8080 -t public public/index.php
  ```
</p>




[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://img.shields.io/packagist/dt/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://img.shields.io/packagist/v/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://img.shields.io/packagist/l/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## Contributing

Thank you for considering contributing to Lumen! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
# api-provaFullstack-1
