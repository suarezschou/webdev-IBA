<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>PHP Intro about</title>
<link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php
    include 'nav.php';
    ?>
    <h1>About</h1>
    <?php
    if ($curpage == 'about.php'){
        echo "<h2>active class</h2>";
        echo "<img class='img-responsive' src='img/sunset.jpg'>";
    }else{
        echo "<p> fefs </p>";
    }
    ?>
</body>
</html>