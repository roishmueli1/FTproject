<?php
    include 'db.php';
    include 'config.php';


    session_start();
    if(!empty($_POST["email"])){
        $query = "SELECT * FROM tbl_users_217 WHERE email='"
            . $_POST["email"]
            . "' AND password = '"
            . $_POST["password"]
            . "'";

        $result = mysqli_query($connection , $query);
        $row = mysqli_fetch_array($result);
        if(is_array($row)) {
            $_SESSION["user_id"] = $row['user_id'];
            header('Location: http://shenkar.html5-book.co.il/2017-2018/html5/dev_217/index.html');

        }else {
            $massage = "Invalid Username or Password";
        }
    }
?>

<!doctype html>
<html>
<head>
    <title> Fitogether </title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="includes/style.css">
    <link href="https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Boogaloo" rel="stylesheet">
    <script src="includes/script.js"> </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">
</head>
<body id="firstPage">
<div id="wrapper">
    <header>
            <h1> FiTogether </h1>
        <i id="profile" class="fas fa-user-circle fa-lg"></i>
        <span id="logout">Logout</span>
    </header>
    <main>
        <h1>Log me in</h1>
        <section class="loginPHP">
            <form action="#" method="POST" id="frm">
                <div><label for="login">Email:</label></div>
                <div><input name="email" type="email"></div>
                <div><label for="password">Password:</label></div>
                <div><input name="password" type="password"></div>
                <div><input type="submit" name="login" value="Log Me In"></div>
                <div><?php if(isset($massage)){ echo $massage; } ?></div>
            </form>
        </section>


    </main>
    <footer>
        <div class="icon-bar">
            <a href="#"> <i class="fas fa-home"><span>Home</span></i></a>
            <a href="CreateNew/createNew.html "> <i class="fas fa-edit"><span>Create</span></i></a>
            <a href="JoinWorkout/find.html"> <i class="fas fa-users"><span>Join</span></i></a>
            <a href="#"> <i class="fas fa-history"><span>History</span></i></a>
            <a href="#"> <i class="fas fa-calendar-check"><span>Schedule</span></i></a>
        </div>

    </footer>
</div>
<script>

</body>
</html>