const express = require("express");

const app = express();
const PORT = 3000;

// Registration Form Page
app.get("/", (req, res) => {

    res.send(`

    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Registration Form</title>

        <style>

            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }

            body{
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(to right, #4facfe, #00f2fe);
            }

            .container{
                width: 400px;
                background: white;
                padding: 35px;
                border-radius: 15px;
                box-shadow: 0 0 20px rgba(0,0,0,0.2);
            }

            h1{
                text-align: center;
                margin-bottom: 25px;
                color: #0077ff;
            }

            .input-box{
                margin-bottom: 20px;
            }

            .input-box label{
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
            }

            .input-box input{
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 16px;
            }

            button{
                width: 100%;
                padding: 12px;
                border: none;
                border-radius: 8px;
                background-color: #0077ff;
                color: white;
                font-size: 18px;
                cursor: pointer;
            }

            button:hover{
                background-color: #005ecc;
            }

            #message{
                margin-top: 20px;
                text-align: center;
                color: green;
                font-weight: bold;
            }

        </style>

    </head>

    <body>

        <div class="container">

            <h1>Registration Form</h1>

            <form onsubmit="registerUser(event)">

                <div class="input-box">
                    <label>Full Name</label>
                    <input type="text" id="name" required>
                </div>

                <div class="input-box">
                    <label>Email</label>
                    <input type="email" id="email" required>
                </div>

                <div class="input-box">
                    <label>Password</label>
                    <input type="password" id="password" required>
                </div>

                <div class="input-box">
                    <label>Phone Number</label>
                    <input type="tel" id="phone" required>
                </div>

                <button type="submit">
                    Register
                </button>

            </form>

            <div id="message"></div>

        </div>

        <script>

            function registerUser(event){

                event.preventDefault();

                let name = document.getElementById("name").value;

                document.getElementById("message").innerHTML =
                    "Registration Successful, Welcome " + name + "!";
            }

        </script>

    </body>

    </html>

    `);

});

// Start Server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});