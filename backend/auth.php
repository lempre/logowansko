<?php
session_start();

require 'vendor/autoload.php';

use App\SQLiteConnection as SQLiteConnection;
use App\SQLiteCreateTable as SQLiteCreateTable;

$pdo = (new SQLiteConnection())->connect();

$sqlite = new SQLiteCreateTable($pdo);
$sqlite->createTables();

if (isset($_POST['password']) && isset($_POST['login'])) {
    $stmt = $pdo->query("SELECT * FROM users");

    while ($result = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $login = $result['login'];

        if ($login == $_POST['login']) {
            if (password_verify($_POST['password'], $result['password'])) {
                session_regenerate_id();
                $_SESSION['loggedin'] = $login;

                header("location: index.php");
                exit;
            }

            header("location: login.php?error=Podałeś błędne hasło");

            exit;
        }
    }
}

header("location: login.php?error=Podany login nie istnieje");