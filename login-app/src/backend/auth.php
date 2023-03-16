<?php
session_start();

require 'vendor/autoload.php';

use App\SQLiteConnection as SQLiteConnection;
use App\SQLiteCreateTable as SQLiteCreateTable;

$pdo = (new SQLiteConnection())->connect();

$sqlite = new SQLiteCreateTable($pdo);
$sqlite->createTables();

echo json_encode(array('login' => $_POST['login'], 'password' => $_POST['password']));

if (isset($_POST['password']) && isset($_POST['login'])) {
    $stmt = $pdo->query("SELECT * FROM users");

    while ($result = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $login = $result['login'];

        if ($login == $_POST['login']) {
            if (password_verify($_POST['password'], $result['password'])) {
                session_regenerate_id();
                $_SESSION['loggedin'] = $login;

                json_encode(array('login' => $login, 'kody nuklearne' => '694202137'));
                exit;
            }

            echo json_encode(array('error' => 'Błędne hasło'));

            exit;
        }
    }
}

echo json_encode(array("error" => 'Użytkownik nie istnieje'));