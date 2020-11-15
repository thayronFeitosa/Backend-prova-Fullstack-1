<?php


        
        
        $jsonobj = '{
            "name": "thaygon",
            "cpf": "12345341911",
            "email":"thayon@g4mgail.com",
            "birthdate": "2017-06-15",
            "password": "123456",
            "ASDFASDF":"",
            "SDFASDF": "ASDFASD"
            }';

            $json = json_decode('{"name": "thaygon","cpf": "12345341911","email":"thayon@g4mgail.com","birthdate": "2017-06-15","password": "123456","ASDFASDF":"","SDFASDF": "ASDFASD"}', true);

        echo($json["name"]);