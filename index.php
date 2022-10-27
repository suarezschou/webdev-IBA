<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCSS testing page</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
    include "navigation.php";
    ?>
    <?php
    $fname = "rgrgrg";
    $lname = "tttt";
    $age = 32234;

    if(is_string()){
        echo "<p>fsfes $fname!</p>";
    }else{
        echo "nonono";
    }
    ?>
    <p>hello my is <?php echo $fname?> I am <?php echo $age ?> years old</p>
    
   
</body>
</html>