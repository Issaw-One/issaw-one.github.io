<?php
session_start();
if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit();
}

$site = [
    "title" => $_POST["title"],
    "desc" => $_POST["desc"],
    "link" => $_POST["link"],
    "category" => strtolower($_POST["category"]),
    "image" => $_POST["image"]
];

$file = 'data/sites.json';
$sites = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
$sites[] = $site;

file_put_contents($file, json_encode($sites, JSON_PRETTY_PRINT));
header("Location: admin.php");
exit();