<?php
// Este comentario está mal y hay que borrarlo
// El nombre por defecto es Mundo
echo "Hola Mundo\n";
$nombre = isset($argv[1]) ? $argv[1] : "Mundo";
@print "Hola, {$nombre}\n";
?>