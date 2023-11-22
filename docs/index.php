<?php

    $peso = $_REQUEST['peso'];
    $altura = $_REQUEST['altura'];

    $imc = $peso / pow($altura, 2);

    $resultado = [];
    $resultado['peso'] =  $peso;
    $resultado['altura'] = $altura;
    $resultado['imc'] = $imc;

    print(json_encode($resultado));

?>