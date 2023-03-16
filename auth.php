<?php
session_start();

require 'vendor/autoload.php';

use App\SQLiteConnection as SQLiteConnection;
use App\SQLiteCreateTable as SQLiteCreateTable;

$pdo = (new SQLiteConnection())->connect();

$sqlite = new SQLiteCreateTable($pdo);
$sqlite->createTables();

if (isset($_POST['password'])) {
    $stmt = $pdo->query("SELECT * FROM password");
    $password = $stmt->fetch(\PDO::FETCH_ASSOC)['password'];

    if (password_verify($_POST['password'], $password)) {
        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;

        header("location: dashboard.php");
    } else {
        header("location: login.php?error=");
    }
} else {
    header("location: login.php?error=");
}