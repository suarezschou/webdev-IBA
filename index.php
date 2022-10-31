<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>PHP Intro</title>
<link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php
    include 'nav.php';
    ?>
    <h1>Home</h1>
    <?php
        $name = 'Nadia';
        if (is_string($name)) {
        echo "Hello, my name is $name!";
            }else{
            echo 'I have no name';
        }
    ?>
    
    <p>Hej mit navn er <?php echo $name?></p>
</body>
</html>