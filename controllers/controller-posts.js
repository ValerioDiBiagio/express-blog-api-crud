//importare posts
const posts = require('../data/posts');


// funzioni CRUD
function index(req, res) {
    
    let postsFilter = posts;
    
    // aggiungere filtro di ricerca per i tag
    if(req.query.tag) {
        postsFilter = posts.filter(post => post.tags.includes(req.query.tag));
    }

    // post filtrati od originali

    res.json(postsFilter);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);


    if(!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    }
    res.json(post);
}


function store(req, res) {
    
    //stampare i dati in arrivo
    console.log(req.body);
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
    const post = posts.find(post => post.id === id);
    
    
    // status error
    if(!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    } 
    
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    // cancellazione avvenuta con successso
    res.sendStatus(204);

}

// esportare function
module.exports = {index, show, store, update, modify, destroy};