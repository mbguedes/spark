const express = require('express');
const path = require('path');
const app = express(); // A instância de 'app' precisa ser criada aqui, no início do arquivo.
const port = 3000;

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servindo a pasta 'public' como arquivos estáticos.
// Isso permite que o navegador acesse index.html, CSS e JS.
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para lidar com o envio do formulário de contato
app.post('/enviar-contato', (req, res) => {
    const { nome, assunto, mensagem } = req.body;

    // Em uma aplicação real, você usaria uma biblioteca como Nodemailer aqui para enviar o email.
    // Por enquanto, vamos apenas registrar os dados no console para demonstração.
    console.log('Novo contato recebido:');
    console.log(`Nome: ${nome}`);
    console.log(`Assunto: ${assunto}`);
    console.log(`Mensagem: ${mensagem}`);

    // Responde ao cliente com uma mensagem de sucesso
    res.send('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});