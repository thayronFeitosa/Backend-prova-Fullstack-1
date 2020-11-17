<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->post('register', 'UserController@createUser');
$router->post('login', 'Auth\LoginController@login');
$router->post('upload', 'CertificateController@upload');
