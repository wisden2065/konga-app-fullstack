const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('ALL PRODUCTS')

})

router.get('/:id', (req, res)=>{
    res.send('ONE PRODUCT')
})

router.post('/:id', (req, res)=>{
    res.send('ADD A PRODUCT WITH AN ID')
})

router.put('/:id/edit', (req, res)=>{
    res.send('EDITING A PRODUCT')
})
      

module.exports = router 