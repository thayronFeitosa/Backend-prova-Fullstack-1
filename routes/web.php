<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->post('register', 'UserController@createUser');
$router->post('login', 'Auth\LoginController@login');

$router->group(['middleware' => 'auth'], function ($router) {

    $router->get('user', 'UserController@getUser');
    $router->post('upload', 'CertificateController@upload');
});
