// express
const express = require('express');

// Router
const router = express.Router();

// rotte CRUD

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
})

// show
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Dettagli del post ' + id)
})

// post
router.post('/', (req, res) => {
    res.send('Creare un nuovo post')
})

// update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica integrale del post ' + id);
})

// modify
router.patch('/:id', (req, res)=> {
    const {id} = req.params;
    res.send('Modifica parziale del post ' + id);
})

// destroy
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.send('eliminazione del post ' + id);
})