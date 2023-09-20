import Database from "./Database.js";

const PRODUTOS_TABLE = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "DESCRICAO" varchar(300),
    "PRECO" INT
);
`
const HISTORICO_TABLE = `
CREATE TABLE IF NOT EXISTS "HISTORICO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PRODUTO" varchar(100),
    "QUANTIDADE" INT,
    "CREDITO" INT
);
`
const CARRINHO_TABLE = `
CREATE TABLE IF NOT EXISTS "CARRINHO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PRODUTO" varchar(100),
    "VALORTOTAL" INT,
    "RESUMOCOMPRA" varchar(100),
    "VALORTROCAID" INT
);
`
const ADD_PRODUTOS_DATA = `
INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO)
VALUES
    ("Papel", "Folhas de papel de qualquer tamanho e formato", "1.00")
`
const ADD_HISTORICO_DATA = `
INSERT INTO HISTORICO (PRODUTO, QUANTIDADE, CREDITO)
VALUES
    ("Papel", "3kg", "100 unidades")
`
const ADD_CARRINHO_DATA = `
INSERT INTO CARRINHO (PRODUTO, VALORTOTAL, RESUMOCOMPRA, VALORTROCAID)
VALUES
    ("Papel", "1.00", "Folhas de papel", "3.00")
`

function criaTabelaProdutos(){
    Database.run(PRODUTOS_TABLE, (error)=> {
        if (error) {
            console.log("Erro ao criar Tabela Produtos")
        } else {
            console.log("Tabela Produtos criada com sucesso!")
        }
    });
}

function populaTabelaProdutos() {
    Database.run(ADD_PRODUTOS_DATA, (error)=> {
        if (error) {
            console.log("Erro ao popular Tabela Produtos")
        } else {
            console.log("Tabela Produtos populada com sucesso!")
        }
    });
}

function criaTabelaHistorico() {
    Database.run(HISTORICO_TABLE, (error)=> {
        if (error) {
            console.log("Erro ao criar Tabela Historico")
        } else {
            console.log("Tabela Historico criada com sucesso")
        }
    })
}

function populaTabelaHistorico() {
    Database.run(ADD_HISTORICO_DATA, (error)=> {
        if (error) {
            console.log(" Erro ao popular a Tabela Historico")
        } else {
            console.log("Tabela Historico populada com sucesso")
        }
    })
}

function criaTabelaCarrinho() {
    Database.run(CARRINHO_TABLE, (error)=> {
        if (error) {
            console.log("Erro ao criar a Tabela Carrinho")
        } else {
            console.log("Tabela Carrinho criada com sucesso")
        }
    })
}

function populaTabelaCarrinho() {
    Database.run(ADD_CARRINHO_DATA, (error)=> {
        if (error) {
            console.log(" Erro ao popular a Tabela Carrinho")
        } else {
            console.log("Tabela Carrinho populada com sucesso!")
        }
    })
}

Database.serialize(()=>{
    criaTabelaProdutos();
    criaTabelaHistorico();
    criaTabelaCarrinho();
    populaTabelaProdutos();
    populaTabelaHistorico();
    populaTabelaCarrinho();
})