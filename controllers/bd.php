<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gabware_blog";

// Create connection
$conexion = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
}

?>