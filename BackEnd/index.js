// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var cors = require('cors');
// app.use(cors('*'));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var nm = require('nodemailer');
// let savedOTPS = {

// };
// var transporter = nm.createTransport(
//     {
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'yourmail.com',
//             pass: 'your app password'
//         }
//     }
// );
// app.post('/sendotp', (req, res) => {
//     let email = req.body.email;
//     let digits = '0123456789';
//     let limit = 4;
//     let otp = ''
//     for (i = 0; i < limit; i++) {
//         otp += digits[Math.floor(Math.random() * 10)];

//     }
//     var options = {
//         from: 'yourmail@gmail.com',
//         to: `${email}`,
//         subject: "Testing node emails",
//         html: `<p>Enter the otp: ${otp} to verify your email address</p>`

//     };
//     transporter.sendMail(
//         options, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send("couldn't send")
//             }
//             else {
//                 savedOTPS[email] = otp;
//                 setTimeout(
//                     () => {
//                         delete savedOTPS.email
//                     }, 60000
//                 )
//                 res.send("sent otp")
//             }

//         }
//     )
// })

// app.post('/verify', (req, res) => {
//     let otprecived = req.body.otp;
//     let email = req.body.email;
//     if (savedOTPS[email] == otprecived) {
//         res.send("Verfied");
//     }
//     else {
//         res.status(500).send("Invalid OTP")
//     }
// })

// app.listen(4000, () => {
//     console.log("started")
// })



// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var cors = require('cors');
// app.use(cors('*'));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var nm = require('nodemailer');
// let savedOTPS = {};

// var transporter = nm.createTransport(
//     {
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'malekusuma2@gmail.com', // Update this with your email
//             pass: 'sobb wwqn hoxp qrir'   // Update this with the App Password
//         }
//     }
// );

// app.post('/sendotp', (req, res) => {
//     let email = req.body.email;
//     let digits = '0123456789';
//     let limit = 4;
//     let otp = ''
//     for (i = 0; i < limit; i++) {
//         otp += digits[Math.floor(Math.random() * 10)];
//     }
//     var options = {
//         from: 'yourmail@gmail.com',  // Update this with your email
//         to: `${email}`,
//         subject: "Testing node emails",
//         html: `<p>Enter the otp: ${otp} to verify your email address</p>`
//     };

//     transporter.sendMail(
//         options, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send("couldn't send")
//             }
//             else {
//                 savedOTPS[email] = otp;
//                 setTimeout(
//                     () => {
//                         delete savedOTPS.email
//                     }, 60000
//                 )
//                 res.send("sent otp")
//             }
//         }
//     )
// })

// app.post('/verify', (req, res) => {
//     let otprecived = req.body.otp;
//     let email = req.body.email;
//     if (savedOTPS[email] == otprecived) {
//         res.send("Verified");
//     }
//     else {
//         res.status(500).send("Invalid OTP")
//     }
// })

// app.listen(4000, () => {
//     console.log("started")
// })


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var nm = require('nodemailer');
let savedOTPS = {};

var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'malekusuma2@gmail.com', // Update this with your email
            pass: 'sobb wwqn hoxp qrir'   // Update this with the App Password
        }
    }
);

app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = ''
    for (i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    var options = {
        from: 'malekusuma2@gmail.com',  // Update this with your email
        to: `${email}`,
        subject: "Testing node emails",
        html: `<p>Enter the otp: ${otp} to verify your email address</p>`
    };

    transporter.sendMail(
        options, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).json({ status: "error", message: "Couldn't send OTP" });
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS[email];
                    }, 60000
                )
                res.json({ status: "success", message: "OTP sent successfully" });
            }
        }
    )
});

app.post('/verify', (req, res) => {
    let otpReceived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otpReceived) {
        res.json({ status: "success", message: "OTP verified successfully" });
    }
    else {
        res.status(500).json({ status: "error", message: "Invalid OTP" });
    }
});

app.listen(4000, () => {
    console.log("started");
});
