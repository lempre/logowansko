<?php
session_start();

if (isset($_SESSION['loggedin'])) {
    header("location: dashboard.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <title>Logowańsko</title>
</head>

<body>
    <form method="post" action="auth.php">
        <div>
            <input type="text" name="login" class="form-control" placeholder="login">
            <input type="password" name="password" class="form-control" placeholder="hasło">
        </div>
        <button>Zaloguj</button>
    </form>

    <?php
        if (isset($_GET['error'])) {
            echo '<p class="color-youtube">$_GET[error]</p>';
        }
    ?>
</body>
</html>