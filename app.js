// express
const express = require('express');
const app = express();

// porta
const port = 4000;

app.listen(port, () => {
    console.log('Sono un server sulla porta ' + port);
})

// pagina iniziale
app.get('/', (req, res) => {
    res.send('Sono nella hompage');
})

