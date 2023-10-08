<?php
// Este comentario está mal y hay que borrarlo
// añadimos algo para modificar un commit existente
// El nombre por defecto es Mundo

require('HolaMundo.php');

echo "Hola Mundo\n";

$nombre = isset($argv[1]) ? $argv[1] : "Mundo";
print new HolaMundo($nombre);

echo "lo que sea";
echo "next commit";
echo "next commit next";
?>