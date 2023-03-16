<?php
session_start();

require 'vendor/autoload.php';

session_destroy();

header("location: login.php");