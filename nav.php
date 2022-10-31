<?php
$curpage = basename ($_SERVER['PHP_SELF']);
$curpage = basename ($_SERVER['PHP_SELF']); //Using the basename function and the superglobal §_SERVER because you can not use a style class directly since the class will be on all pages (all links will show as active) - instead an if statement has been used --> if the current page is contact.php the class will be shown as active. The $_SERVER is a super global variable which holds information about header, locations etc.?>
    <header>
        <nav>
             <a href="index.php"><img src="img/logo.svg" alt="Logo"></a>
            <ul>
                <li><a class="<?= ($curpage == 'index.php') ? 'active':''; ?>" href="index.php">Home</a></li>
                <li><a class="<?= ($curpage == 'about.php') ? 'active':''; ?>" href="about.php">About</a></li> <!--we are here using a ternary operator in our php code in order to check whether what page needs to be set to class active. if it is not that page there should be no class hense the emty ''. == in php means equal to-->
                <li><a class="<?= ($curpage == 'products.php') ? 'active':''; ?>" href="products.php">Products</a></li>
                <li><a class="<?= ($curpage == 'contact.php') ? 'active':''; ?>" href="contact.php">Contact</a></li>
            </ul>
        </nav>
    </header>
