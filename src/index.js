
//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS
const express = require('express'); // IMPORTANDO EXPRESS

const path = require('path'); //IMPORTANDNO PATH
//O PATH RETORNA O CAMINHO DE FORMA DINAMICA
const app = express();
//O APP IRÁ RECEBER O EXPRESS E TODAS SUAS DEPENDÊNCIAS

const router = express.Router();
// ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTS PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})

//AQUI DEFINIMOS NOSSA ROTA PARA O ARQUIVO HTML USANDO O PATH PARA SEMPRE RETORNAR DINAMICAMENTE O VEM ANTES DA "/pages/home.html"
//TUDO QUE SE ENCONTRA DEPOIS DA BARRA"/" SERÃO NOSSAS ROTAS.

app.use(router);
//APOS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO APP USAR COMO REFERENCIA.

app.listen(3333, () => {
    console.log('SERVIDOR FUNCIONANDO')
})
//AQUI DEFINIMOS QUEM IRÁ ESCUTAR NOSSO CHAMADO E NOS RESPONDER

app.get('/hello', (req, res) => {
    console.log('GET FUNCIONANDO');
    res.send({ message: 'HELLO WORLD!!' });
})

//DENTRO DO GET JA DEFINIMOS UMA FUNÇÃO ANONIMA CALLBACK, QUE RECEBE UMA REQUISIÇÃO COM O REQUEST E QUE RETORNA UMA RESPOSTA COM O REPLY.
app.get('/usuario', (req, res) => {
    console.log('GET USUARIO FUNCIONANDO');
    res.send({ usuario: ' Joao' });
})