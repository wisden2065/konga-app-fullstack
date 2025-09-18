const express = require('express');
const router = express.Router();
const mysql = require('mysql')

// create the connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'konga_clone'
})        

connection.connect()

// get all cart items
router.get('/', (req, res)=>{
    // check if user is signedIn 
    if(req.session?.id){ 
        console.log('user has a session id!');
        console.log(req.session.id)
        const query = "SELECT * FROM cart_items WHERE id = ?";
        connection.query(query,[req.session.id], (error, rows, fields)=>{
            if(error){
                return res.send({status:'failed', reason:'an error occurred in querying cart db'})
            }
            else{
                return res.send({status:'success', cart:rows})
            }  
        })
    }
    else{
        console.log('User does not have a session id')
    }
    
})

router.post('/add/:id', (req, res)=>{

}) 

module.exports = router;