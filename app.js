const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req, res) => {
    try {
        const { usuarios: { nome, idade, timeFavorito } } = req.body;

        if (isNaN(idade)) {
            return res.status(400).json({message: `Erro: Número inválido`});
        }
        
        console.log(`Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}`);
        res.status(201).json({ message: `Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}`});

    } catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ errorMessage: error });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})