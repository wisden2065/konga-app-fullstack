const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


// create connection to db
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'konga_clone' 
})

// signup route
router.post('/signup', (req, res)=>{

    console.log('Making an attempt to create new user')

    const sql = 'INSERT INTO users ( `name`, `email`, `password`) VALUES (?)';
    // hash password with bcryptjs
    bcrypt.hash(req.body.password, 10,(error, hash)=>{

        if(error) return res.json({Error:'Error hashing password'})
            
        const values = [
            req.body.name,
            req.body.email, 
            hash           
        ];
        console.log('Making db query...')  
        db.query(sql, [values], (err, result)=>{
            if(err){
                return  res.json({status: 'Db Query Failed'})
            } 
            else{
                console.log('Successfully inserted new user')
                // are we saying something like..
                // Hey client, i have your response ready, i am putting this in the response body???
                return res.json({status:'success', result})
            }
           
            
        })
    }) 
})
 

// login route
router.post('/login', (req, res)=>{
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, result)=>{
        if(err) return res.json({Error:'Db Query not successful'})
        if(result.length >0){
            // compare passwords
            console.log(req.body.password)
            const plainPassword = req.body.password.trim()
            const hashedPassInDb = result[0].password.trim();

            bcrypt.compare(plainPassword, hashedPassInDb, (err, resultFromPassHash)=>{
                if(err) return res.json({Error:'Failed to compare password in db'})
                // console.log(resultFromPassHash) 
                console.log(result[0].password)

                if(resultFromPassHash){
                    // store the current user data in a session object
                    req.session.name = result[0].name;
                    // console.log(req)
                    // console.log(req.session)

                    // generate a jwt 
                    const userId = result[0].id;
                    const access_token = jwt.sign({'userId':userId}, 'your_secrete_key', {expiresIn:'5h'})

                     // send a cookie before the actual response
                    res.cookie('name', result[0].name,{
                        domain:'localhost',
                        path:'/',
                        httpOnly: true,
                        secure:false,
                        sameSite:'lax'
                    })
                    
                    res.cookie('access_token', `Bearer${access_token}`,{
                        maxAge: 8 * 60 * 60 * 1000
                    })
                    return res.json({status:'success', userObj:result[0]})
                }
                else{
                    return res.json({status:'failed', reason:'Invalid password'})
                }
            }) 
        }       
        else{
            return res.json({status:'failed', reason:'Invalid user account. Please signup to continue'})
        }
    })      
})


module.exports = router;