<?php
session_start();
if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit();
}

$index = $_GET["index"];
$file = 'data/sites.json';
$sites = json_decode(file_get_contents($file), true);

if (isset($sites[$index])) {
    array_splice($sites, $index, 1);
    file_put_contents($file, json_encode($sites, JSON_PRETTY_PRINT));
}

header("Location: admin.php");
exit();