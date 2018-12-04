<?php 

header("Content-Type: text/html; charset=UTF-8");
header("Content-Security-Policy: default-src 'self'; script-src 'self' cdnjs.cloudflare.com code.jquery.com stackpath.bootstrapcdn.com; img-src 'self'; style-src 'self' 'unsafe-inline' cdnjs.cloudflare.com stackpath.bootstrapcdn.com use.fontawesome.com; font-src 'self' use.fontawesome.com; form-action 'self'");
header("Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: SAMEORIGIN");
header("X-Xss-Protection: 1;mode=block");

require_once('db/keys.php');

// Create connection
$conn = new mysqli($db["servername"], $db["username"], $db["password"], $db["dbname"]);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$ip = mysqli_real_escape_string($conn, $_SERVER['REMOTE_ADDR']);
$data_array = getallheaders();
$data_array['REQUEST_URI'] = $_SERVER["REQUEST_URI"];
$data_array["REMOTE_PORT"] = $_SERVER["REMOTE_PORT"];

$data = mysqli_real_escape_string($conn, json_encode($data_array));
$sql = "INSERT INTO ajogya_profile ( `ip` , `data` ) VALUES ( '$ip', '$data' )";

if ($conn->query($sql) === TRUE) { } else {
    die($conn->error);
}

$conn->close();

?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Resume of J Sreepati Rao">
        <meta name="author" content="J Sreepati Rao">
        <meta http-equiv="Cache-control" content="public" />
        <meta http-equiv="x-dns-prefetch-control" content="on">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#333333">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
        <link rel="manifest" href="assets/site.webmanifest">
        <link rel="mask-icon" href="assets/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="alternate" href="http://www.ajogyashree.in/" hreflang="en-IN" />
        <title>J Sreepati Rao</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/style.css">
    </head>
    <body>
        <main role="main">
            <section class="left">
                <div class="photo">
                    <img class="img-fluid me" src="assets/me.jpg" alt="J Sreepati Rao">
                </div>
                <div class="location">
                    <p class="pin"><a href="https://plus.codes/7J4VWPX3+2G" title="Somewhere Nearby"><i class="fas fa-map-marker-alt"></i></a></p>
                    <p class="title">Address</p>
                    <address class="detail">Munnekolala, Marathahalli, Bengaluru 560037</address>
                </div>
                <div class="about">
                    <p class="pin"><i class="fas fa-user"></i></p>
                    <p class="title">About Me</p>
                    <p class="detail">A result oriented professional with 5 years of experience in Full Stack Web Development</p>
                </div>
                <div class="skill-set">
                    <p class="pin"><i class="fas fa-laptop-code"></i></p>
                    <p class="title">Skills</p>
                    <ul>
                        <li>
                            <p class="progress-bar"><span style="width: 90%"></span></p>
                            <p class="title">HTML5</p>
                        </li>
                        <li>
                            <p class="progress-bar"><span style="width: 71%"></span></p>
                            <p class="title">CSS3 / LESS / SCSS</p>
                        </li>
                        <li>
                            <p class="progress-bar"><span style="width: 80%"></span></p>
                            <p class="title">Bootstrap framework / Material design system</p>
                        </li>
                        <li>
                            <p class="progress-bar"><span style="width: 70%"></span></p>
                            <p class="title">JavaScript / jQuery</p>
                        </li>
                        <li>
                            <p class="progress-bar"><span style="width: 50%"></span></p>
                            <p class="title">Angularjs / React</p>
                        </li>
                        <li>
                            <p class="progress-bar"><span style="width: 60%"></span></p>
                            <p class="title">PHP Core / Frameworks</p>
                        </li>
                        <li class="social">
                            <a target="_blank" href="https://www.facebook.com/J.Sreepati.Rao" title="Need Login!! Meh!!!"><i class="fab fa-facebook-square"></i></a>
                            <a target="_blank" href="https://github.com/ajogyashree"><i class="fab fa-github"></i></a>
                            <a target="_blank" href="https://stackoverflow.com/users/3007408/sp0t?tab=profile"><i class="fab fa-stack-overflow"></i></a>
                            <a target="_blank" href="https://twitter.com/ajogya_shree"><i class="fab fa-twitter-square"></i></a>
                            <a target="_blank" href="https://www.amazon.in/hz/wishlist/ls/GPCUUSXK0EGX" title="We have a derth of Good people"><i class="fab fa-amazon"></i></a>
                            <a target="_blank" href="https://www.amazon.in/hz/wishlist/ls/GPCUUSXK0EGX" title="We have a derth of Good people"><i class="fab fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="right">
                <div class="name">
                    <div class="position">Full Stack Developer</div>
                    <h1 class="me">J Sreepati Rao</h1>
                    <div class="contact">
                        <p class="phone" title="78273">+91 xxxxx-85576</p>
                        <p class="email">jsr@this-site-replace-here.me</p>
                        <p class="site"><a href="https://www.ajogyashree.me">www.ajogyashree.me</a></p>
                    </div>
                </div>
                <div class="work-details">
                    <p class="pin"><i class="fas fa-cog"></i></p>
                    <div class="title">Work</div>
                    <div class="card">
                        <div class="left">
                            <p class="year">
                                Present
                                <br>
                                July 2016
                            </p>
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.jigsawacademy.com">Jigsaw Academy Education Pvt. Ltd.</a>
                                </li>
                                <li>
                                    <ul class="points">
                                        <li>
                                            <a target="_blank" href="https://www.jigsawacademy.com/jaws">Centralized admin panel</a> built on angularjs catering to live lead tracking, student’s course progress, creation of customizable course packages and reports. Search powered by React
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.jigsawacademy.com">Main site</a> built using SCSS and <a target="_blank" href="https://www.jigsawacademy.net">Student Learning Center</a> designed using LESS preprocessor.
                                        </li>
                                        <li>
                                            Multiple Campaign/ Landing pages ( SPA ) designing and integration for lead generation.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="left">
                            <p class="year">
                                June 2016
                                <br>
                                Oct. 2013
                            </p>
                        </div>
                        <div class="right">
                            <span class="verticle-bar"></span>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.synapseindia.com/">Synapse India</a>
                                </li>
                                <li>
                                    <ul class="points">
                                        <li>
                                            Worked as lead developer for  <a target="_blank" href="https://www.foodcloud.in">Foodcloud.in</a>
                                        </li>
                                        <li>
                                            Multivendor food based ecommerce platform catering to users across Delhi NCR
                                        </li>
                                        <li>
                                            Multiple <a target="_blank" href="https://www.synapseindia.com/portfolio/" title="Mostly on CakePHP,Opencart and Ecommerce"> other</a> projects based of different platforms
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="education-details">
                    <p class="pin"><i class="fas fa-graduation-cap"></i></p>
                    <div class="title">Education</div>
                    <div class="card">
                        <div class="left">
                            <p class="year">
                                Always
                                <br>
                                Learning Something
                            </p>
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <ul class="points">
                                        <li>
                                            B.Tech ( Computer Science ) under Biju Patnaik University of Technology, Rourkela in 2012, securing 7.1 CGPA
                                        </li>
                                        <li>
                                            +2 under Council of Higher Secondary Education, Berhampur in 2008, securing 67%
                                        </li>
                                        <li>
                                            10th under Central Board of Secondary Education, Bhubaneswar in 2006, securing 78%
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="hobbies">
                    <p class="pin"><i class="fas fa-book"></i></p>
                    <div class="title">Others</div>
                    <div class="card">
                        <div class="left">
                            &emsp;
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <ul class="points">
                                        <li>
                                            <a target="_blank" href="https://www.asklaila.com/" title="Certified by BKBirla">Certified</a> Search Engine Optimization professional
                                        </li>
                                        <li>
                                            Awarded as “Best Employee of the Month” for the month of March 2016 and Oct. 2014 in Synapse India
                                        </li>
                                        <li>
                                            Reading <a target="_blank" href="https://www.wuxiaworld.com/"> Web Novels</a>, <a target="_blank" href="https://www.viz.com/one-piece"> Manga</a> and a lot of other stuff
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <p>
                <span class="copy">
                    &copy; J Sreepati Rao 2018
                </span>
                <span class="design">
                    Design from <a target="_blank" href="http://zokidesign.com/portfolio/free-resume-template/">http://zokidesign.com/portfolio/free-resume-template/</a>
                </span>
            </p>
        </footer>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>