const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/login", (req, res) => {
    try {
        const { usuario, senha } = req.body;

        if (usuario != "Nicolas" || senha != 1234) {
            return res.status(400).json({ message: `Usuário ou Senha incorretos. Login não efetuado!` });
        }

        return res.status(201).json({ message: `Usuário e senha corretos. Login efetuado com sucesso!` });

    } catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ errorMessage: error });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})