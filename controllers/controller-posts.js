//importare posts
const posts = require('../data/posts');


// funzioni CRUD
function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    res.json(post);
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
    const id = parseInt(req.params.id);
    const post = posts.findIndex(post => post.id === id);
    posts.splice(post, 1);
    console.log(posts);

    if (post) {
        res.status(204);
        return res.json({
            status:204
        })
    } 
}

// esportare function
module.exports = {index, show, store, update, modify, destroy};