const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/soma", (req, res) => {
    try {
        const { numUm, numDois, numTres } = req.body;

        if (isNaN(numUm) || isNaN(numDois) || isNaN(numTres)) {

            return res.status(400).json({message: `Erro: Os números inseridos não são válidos!`});
            
        }
        res.status(201).json({ message: `O resultado da soma dos 3 números é: ${numUm + numDois + numTres}`});

    } catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ errorMessage: error });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})