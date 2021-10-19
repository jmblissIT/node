const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  //get register form
  exports.registerForm = (req, res) => {
    res.render('register-user');
  }
  //get register form
  exports.loginForm = (req, res) => {
    res.render('login-user');
  }