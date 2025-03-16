<?php

function enviarMensaje($name, $email, $message)
{
    $para='acostasanchezangelgabriel@gmail.com';
    $asunto='Mensaje de ' . $name;
    $mensaje='El usuario ' . $name . ' con correo ' . $email . 'se ha contactado diciendo: ' . $message;
    $cabecera="From: no-reply@blanchedalmond-jay-273532.hostingersite.com";

    if (mail($para, $asunto, $mensaje, $cabecera)) {
        return true;
    } else {
        return false;
    }
}

// Verify if receiving POST request with JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Set response header as JSON
    header('Content-Type: application/json');

    // Decode received JSON
    $data = json_decode(file_get_contents("php://input"), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    // Validate received data    

    //include_once('bd.php');
    switch ($data['action']) {
        case 'mensaje':
            /*if (!$conexion) {
                echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
                exit;
            }*/

            // Resto del código...
            try {
                $response = enviarMensaje($data['name'], $data['email'], $data['message']);
                if ($response) {
                    echo json_encode(['success' => true, 'message' => 'mensaje exitoso']);
                } else {
                    echo json_encode(['error' => 'no se pudo enviar el mensaje']);
                }
            } catch (Exception $e) {
                echo json_encode(['error' => $e->getMessage()]);
            }
            break;
        default:
            echo json_encode(['success' => false]);
            break;
    }
}