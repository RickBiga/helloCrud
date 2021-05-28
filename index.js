const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioRicardo = {
    id: 1,
    Nome: 'Ricardo Bigarani',
    Idade: 38,
};

const usuarios = [usuarioRicardo];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/', (req, res) => {
    const { nome, idade } = req.body;
    const id = usuarios.length;

    const novoUsuario = {
        id,
        nome,
        idade
    };

    usuarios.push(novoUsuario);
    res.json(novoUsuario);

});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});

