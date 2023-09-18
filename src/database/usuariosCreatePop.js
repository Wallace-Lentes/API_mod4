import Database from "./Database.js";

const USUARIOS_TABLE = `
CREATE TABLE IF NOT EXISTS "USUARIOS(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NOME" varchar (100), 
    "EMAIL" varchar (100),
    "SENHA" varchar(100),
    "TELEFONE" int,
    "CPF" int,
    "CEP" int,
    "NUMEROEND" int 
 );
 `

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS_TABLE(NOME, EMAIL, SENHA, TELEFONE, CPF, CEP, NUMEROEND)
VALUES 
        ("Leonardo Silva", "leozinho@email.com", "123456", "42987646372", "78273928342", "865345149", "283");
`


function criarTabelaUsuarios() {
    Database.run(USUARIOS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar a tabela Usuários")
        } else {
            console.log("Tabela criada com sucesso")
        }
    })
};


function popularTabelaUsuarios() {
    Database.run(ADD_USUARIOS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular a tabela Usuários")
        } else {
            console.log("Tabela populada com sucesso")
        }
    })
};

Database.serialize(()=>{
    criarTabelaUsuarios();
    popularTabelaUsuarios();
})