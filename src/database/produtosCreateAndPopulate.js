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
    "PRODUTO" varchar(100)
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
    ()
`
const ADD_HISTORICO_DATA = `
INSERT INTO HISTORICO (PRODUTO, QUANTIDADE, CREDITO)
VALUES
    ()
`
const ADD_CARRINHO_DATA = `
INSERT INTO CARRINHO (PRODUTO, VALORTOTAL, RESUMOCOMPRA, VALORTROCA)
VALUES
    ()
`

function criaTabelaProdutos(){
    Database.run(PRODUTOS_TABLE, (error)=> {
        if (error) {
            console.log("Erro ao criar Tabela")
        } else {
            console.log("Tabela criada com sucesso!")
        }
    });
}

function populaTabelaProdutos() {
    Database.run(ADD_PRODUTOS_DATA, (error)=> {
        if (error) {
            console.log("Erro ao popular tabela")
        } else {
            console.log("Tabela populada com sucesso!")
        }
    });
}

Database.serialize(()=>{
    criaTabelaProdutos();
    populaTabelaProdutos();
})