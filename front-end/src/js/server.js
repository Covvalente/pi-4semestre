const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_seu_banco_de_dados'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

// Rota de exemplo
app.get('/', (req, res) => {
    connection.query('SELECT * FROM minha_tabela', (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        res.json(results);
    });
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
