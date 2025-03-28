//importare posts
const posts = require('../data/posts');


// funzioni CRUD
function index(req, res) {
    res.send('Lista dei post');
}

function show(req, res) {
    const {id} = req.params;
    res.send('Dettagli del post ' + id)
}

function store(req, res) {
    res.send('Creare un nuovo post')
}

function update(req, res) {
    const {id} = req.params;
    res.send('Modifica integrale del post ' + id);
}

function modify(req, res) {
    const {id} = req.params;
    res.send('Modifica parziale del post ' + id);
}

function destroy(req, res) {
    const {id} = req.params;
    res.send('Eliminazione del post ' + id);
}

// esportare function
module.exports = {index, show, store, update, modify, destroy};