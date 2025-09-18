const express = require('express');
const router = express.Router();



router.get('/:id', (req, res)=>{
    res.send('SINGLE USER')
})
 
router.post('/:id', (req, res)=>{
    res.send('ADDING A NEW USER')
})

router.put('/:id/edit', (req, res)=>{
    res.send('UPDATING A USER INFO')
})

// assuming we want to only check if the req is from an admin to grant permission to this route 
// we could add a middle ware here 
router.use((req, res, next)=>{
    if(req.query.isAdmin){
        return next()
    }
    res.send('Not An Admin. Require Admin Privileges')
})
 
router.get('/', (req, res)=>{
    console.log('ALL USERS')
    res.send('ALL USERS')
})
      
router.delete('/:id', (req, res)=>{
    res.send('DELETING A USER ACCOUNT')
})
 
module.exports = router;