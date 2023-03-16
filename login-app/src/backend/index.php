<?php
session_start();

if (!isset($_SESSION['loggedin'])) {
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <title>Cockpit</title>
    </head>

    <body>
        Zawartość stronki
    </body>
</html>
