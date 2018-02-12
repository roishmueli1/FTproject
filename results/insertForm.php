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
    <body id="insertForm">
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

            <?php
            echo "<section>
                    <form action='insert10km.php' method='GET'>
                        <h2>Insert data</h2>
                            <label class='id'>
                            <span>Id:</span><input type='text' name='id'>
                            </label><br>
                            <label class='rank'>
                            <span>Rank:</span><input type='text' name='rank'>
                            </label><br>
                            <label class='time'>
                            <span>Time:</span> <input type='text' name='time'>
                            </label><br>
                            <label class='avg'>
                            <span>Avg:</span><input type='text' name='avg'>
                            </label><br>
                            <label class='birthdate'>
                            <span>Birth year:</span><input type='text' name='birth_date'>
                            </label><br>
                            <input type='submit' value='Insert'>
                    </form>
                  </section>";
            ?>
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
?>