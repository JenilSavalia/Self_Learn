const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        font-family: "Zapf Humanist 601 BT", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: url(https://gurukul.org/wp-content/uploads/2024/03/02-Large.jpg) no-repeat;

    }

    /* header::before{
        background: url(https://gurukul.org/wp-content/uploads/2024/03/02-Large.jpg);
        content: ;
        position: absolute;
        left: 0;
        top: 0;
    } */

    .left {
        display: inline-block;
        border: 2px solid white;
        position: absolute;
        top: 0px;
        left: 66px;
        height: 140px;
        width: 247px;
        background-color: white;
        border-radius: 0 0 15px 15px;
        box-shadow: 0px 2px 7px -3px black;
    }

    .mid {
        display: block;
        /* width: 36%; */
        margin: 47px -8PX;
    }

    .right {
        /* border: 2px solid magenta; */
        background-color: white;
        /* display: block; */
        position: absolute;
        top: 0px;
        right: 0px;
        width: 1275px;
        width: 1869px;
        height: 76px;
        z-index: -1;
    }

    .topbar {
        /* background-color: white; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        /* border: 2px solid greenyellow; */
    }

    .topbar ul {
        margin-left: 856px;
        margin-top: 12px;
    }

    .topbar ul li {
        display: inline-block;

    }

    .topbar ul li a {
        text-decoration: none;
        padding: 2px 2px;
    }

    .navbar {
        display: inline-block;
        /* border: 2px solid red; */
        background-color: #db3434;
        width: 2000px;

    }

    .navbar ul {
        margin: 15px 400px;
    }

    .navbar ul li {
        display: inline-block;
        font-size: 25px;
    }

    .navbar ul li a {

        text-decoration: none;
        padding: 2px 25px;
        color: rgb(255, 255, 255);
        transition-property: all;
        transition-duration: 1s;
        
    }

    .navbar ul li a:hover {
        text-decoration: underline;
        color: rgb(0, 0, 0);
    }

    .left img {
        width: 208px;
        padding: 16px 17px;
    }

    .left div {
        text-align: center;
        line-height: 0px;
    }

    .btn {
        margin: 3px 30px;
        cursor: pointer;
        font-size: large;
        background-color: red;
        border: 2px solid white;
        height: 40px;
        width: 130px;
        color: white;
        transition-property: background-color;
        transition-duration: 0.8s;
        transition-delay: 0.1s;
    }

    .btn:hover {
        background-color: #000000;
    }

    .container {

        margin: 81px 26px;
        padding: 12px 24px;
        width: 405px;
        background-color: #ced4da;
        border-radius: 10px;
    }

    .form input {
        margin: 9px 13px;
        padding: 3px 1px;
        text-align: center;
        display: block;
        width: 359px;
        height: 33px;
        border-radius: 12px;
        font-size: 16px;
    }

    .form select {
        margin: 9px 13px;
        padding: 3px 1px;
        text-align: center;
        display: block;
        width: 365px;
        height: 42px;
        border-radius: 12px;
        font-size: 16px;
        border: 2PX solid black;
    }

    .form button {
        display: block;
        width: 86%;
        margin: 15px 19px;
    }



    .h3 {
        color: rgb(100, 100, 100);
    }

    .homelogo {
        display: inline-block;
        margin: -7px 5px;

    }

    .mid {
        display: block;
        /* width: 36%; */
        margin: 47px -8PX;
    }

    .container h1 {

        text-shadow: 2px 2px 3px grey;
    }
</style>

<body>
    <header>
        <div class="left">
            <img src="https://gurukul.org/wp-content/uploads/2023/09/head-logo-1.svg" alt="">
            <div>
                </strong>|| Transforming Lives ||<strong>
            </div>

        </div>

        <div class="mid">

            <nav class="navbar">
                <ul>
                    <li><a href="D:\CodingGita\HTML\Responsive Website\index.html">Home</a></li>
                    <li><a href="#">Parents</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Contributions</a></li>
                </ul>
            </nav>
        </div>


        <div class="right">

            <nav class="topbar">
                <ul>
                    <li><a href="#"><img class="homelogo"
                                src="https://gurukul.org/wp-content/themes/gurukularts/assets/gurukul_monogram.svg">
                            Home </a></li>
                    <li><a href="#">Parents</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Contributions</a></li>
                </ul>
            </nav>
        </div>

    </header>
    <div class="container">
        <h1>Book a campus visit today</h1>
        <h3 class="h3">1,11,636 Students Transformed Life, Be One of them</h3>
        <form class="form" action="backend.php">

            <div class="form">
                <input type="text" name="Name" placeholder="Child Name">
            </div>


            <div class="form">
                <input type="number" name="Name" placeholder="Mobile*">
            </div>


            <div class="form">
                <input type="email" name="email" placeholder="Email*">
            </div>


            <div class="form">
                <select name="Branch">
                    <option value="SC">HYD</option>
                    <option value="SVC">BLR</option>
                    <option value="HC">MUM</option>
                    <option value="HC" selected>Select Branch*</option>
                </select>
            </div>


            <div>
                <button class="btn">Submit Now</button>
            </div>
        </form>

    </div>
</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
