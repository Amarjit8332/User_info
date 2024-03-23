const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql=require ('mysql2')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db =mysql.createConnection({
    host: 'localhost',
    user :'root',
    password:'1234',
    database:'dummy',
    port: 3306
});
//check database connection
db.connect(err =>{
    if(err){console.log('err')}
    console.log("Database is connected")
})

//get all data
app.get('/users',(req, res) =>{
   // console.log('get all data');
   let qrr='SELECT * FROM user';
   db.query(qrr,(err,results)=>{
       if (err) {
        console.log(err,'errs');

       }
       if(results.length > 0 ){
        res.send({
            message:'all users data ',
            data: results
        });
       };
    })  ;

});

//get single data by id

app.get('/users/:id', (req, res) => {
  //  console.log('get data by id');
    let qrId = req.params.id;
    let qr = 'SELECT * FROM user WHERE id = ?';
    db.query(qr, [qrId], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Error in fetching data',
                error: err
            });
        } else {
            if (results.length > 0) {
                res.send({
                    message: 'Single user data by id',
                    data: results[0]
                });
            } else {
                res.status(404).send({
                    message: 'No data found with id ' + qrId
                });
            }
        }
    });
});

//post data 
app.post('/users', (req, res) => {
    const { name, last_name, preferredName, pronouns, email, phoneNumber, faxNumber, department, address_1, address_2, city, province, country, zip_code, manager_first_name, manager_last_name, manager_email, linked_in, facebook, other } = req.body;
  
    if (!phoneNumber) {
      return res.status(400).send({
        message: 'Phone number is required',
      });
    }
  
    const query = 'INSERT INTO user (name, last_name, preferred_name, pronouns, email, phone_number, fax_number, department, address_1, address_2, city, province, country, zip_code, manager_first_name, manager_last_name, manager_email, linked_in, facebook, other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, last_name, preferredName, pronouns, email, phoneNumber, faxNumber, department, address_1, address_2, city, province, country, zip_code, manager_first_name, manager_last_name, manager_email, linked_in, facebook, other], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message: 'Error in saving the user',
          error: err,
        });} else {
        res.send({
          message: name+' registered successfully',
          data: results,
        });
      }
    });
  });


app.listen(3000, () => {
     console.log("Server started on port 3000 ,  amarjit"); 
})