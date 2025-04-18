<?php

function addPost($con,$title, $content, $enlace, $imageurl) {
    $sql = "INSERT INTO Post (titulo, contenido, link_img, enlace) VALUES (?,?,?,?)";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "ssss", $title, $content, $imageurl,$enlace);
    $result = mysqli_stmt_execute($stmt);
    return $result;
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

    include_once('bd.php');
    switch ($data['action']) {
        case 'addPost':
            if (!$conexion) {
                echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
                exit;
            }

            // Resto del código...
            try {
                $response = addPost($conexion,$data['title'], $data['content'], $data['enlace'], $data['imageurl']);
                if ($response) {
                    echo json_encode(['success' => true, 'message' => 'post exitoso', 'id' => $conexion->insert_id]);
                } else {
                    echo json_encode(['success' => false, 'message' => 'post fallido']);
                }
                
            } catch (Exception $e) {
                echo json_encode(['error' => $e->getMessage()]);
            }
            break;
            break;
        default:
            echo json_encode(['success' => false]);
            break;
    }
}
