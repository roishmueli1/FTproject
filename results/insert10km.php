<?php
define("DBHOST" , "182.50.133.55");
define("DBUSER" , "auxstudDB7c");
define("DBPASS" , "auxstud7cDB1!");
define("DBNAME" , "auxstudDB7c");
$connection = mysqli_connect(DBHOST, DBUSER , DBPASS , DBNAME);
//testing connection success
if(mysqli_connect_errno()) {
    die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
    );
}
?>


    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Insert trail run</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../includes/style.css">
        <link href="https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Boogaloo" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../includes/script.js"> </script>
        <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">
    </head>
    <body id="insert10km">
    <div id="wrapper">
        <header>
            <h1> Results </h1>
            <i id="profile" class="fas fa-user-circle fa-lg"></i>
            <span id="logout">Logout</span>
        </header>
        <main>
            <nav>
                <ul>
                    <li class="vipNav"><a href="../vip/special/specialFeb.html">Special</a></li>
                    <li class="vipNav"><a href="#">Achievements</a></li>
                    <li class="vipNav"><a href="../vip/events/events.html" >Events</a></li>
                    <li class="vipNav"><a href="#" class="selected">History</a></li>
                </ul>
            </nav>
            <br><br>


            <?php
            $id = (isset($_GET['id']) ? $_GET['id'] : null);
            $rank = (isset($_GET['rank']) ? $_GET['rank'] : null);
            $time = (isset($_GET['time']) ? $_GET['time'] : null);
            $avg = (isset($_GET['avg']) ? $_GET['avg'] : null);
            $birth_date = (isset($_GET['birth_date']) ? $_GET['birth_date'] : null);
            //get data from DB
            $query = "INSERT INTO tbl_10km_217 VALUES ('$id', '$rank', '$time', '$avg', '$birth_date')";

            $result = mysqli_query($connection, $query);
            if(!$result){
                die("DB query failed.");

            }else{
                echo "<h1> insert successfully ! </h1>";
            }
            ?>
            <form action="10km.php" method="get">
                  <input type="submit" value="View table">
            </form>

        </main>
        <footer>
            <div class="icon-bar">
                <a href="../index.html"> <i class="fas fa-home"><span>Home</span></i></a>
                <a href="../CreateNew/createNew.html"> <i class="fas fa-edit"><span>Create</span></i></a>
                <a href="../JoinWorkout/find.html"> <i class="fas fa-users"><span>Join</span></i></a>
                <a href="../vip/history/history.html"> <i class="fas fa-history"><span>History</span></i></a>
                <a href="#"> <i class="fas fa-calendar-check"><span>Results</span></i></a>
            </div>
        </footer>

    </body>
    </html>
<?php

mysqli_close($connection);
?><?php
/**
 * Created by PhpStorm.
 * User: Roi Shmueli
 * Date: 12/02/2018
 * Time: 09:58
 */