<?php
session_start();
if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit();
}

$file = 'data/sites.json';
$sites = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Panneau Admin</title>
    <link rel="stylesheet" href="style.css">
    <style>
        table {{
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
        }}
        th, td {{
            padding: 10px;
            border: 1px solid #ccc;
        }}
        th {{
            background-color: #f2f2f2;
        }}
    </style>
</head>
<body>
<div class="container">
    <h2>Ajouter un site</h2>
    <form action="save_site.php" method="POST">
        <input type="text" name="title" placeholder="Titre du site" required><br>
        <input type="text" name="desc" placeholder="Description" required><br>
        <input type="url" name="link" placeholder="Lien" required><br>
        <input type="text" name="category" placeholder="Catégorie (films, series, animes, drama)" required><br>
        <input type="url" name="image" placeholder="Image URL" required><br>
        <button type="submit">Ajouter</button>
    </form>

    <h2>Sites existants</h2>
    <table>
        <thead>
            <tr>
                <th>Titre</th><th>Description</th><th>Catégorie</th><th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($sites as $index => $site): ?>
                <tr>
                    <td><?= htmlspecialchars($site['title']) ?></td>
                    <td><?= htmlspecialchars($site['desc']) ?></td>
                    <td><?= htmlspecialchars($site['category']) ?></td>
                    <td>
                        <a href="delete_site.php?index=<?= $index ?>" onclick="return confirm('Supprimer ce site ?')">🗑️ Supprimer</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <br>
    <a href="logout.php">Se déconnecter</a>
</div>
</body>
</html>