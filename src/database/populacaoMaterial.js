import Database from "./Database.js";

const MATERIAL_TABLE = `
CREATE TABLE IF NOT EXISTS "MATERIAL" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TIPOLIXO" varchar(64),
    "QUANTIDADE" varchar(64),
    "PESO" varchar(11)
  );
`

const ADD_MATERIAL_DATA = `
INSERT INTO MATERIAL (TIPOLIXO, QUANTIDADE, PESO)
VALUES 
    ('Papel', 'Duas bags', '100kg'),
    ('Ferro', 'Uma bag', '233kg'),
    ('Latinha', 'Três bags', '312kg')
`

function criaTabelaMat() {
    Database.run(MATERIAL_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Material")
        } else {
            console.log("Tabela Material criada com sucesso!")
        }
    });
}


function populaTabelaMat() {
    Database.run(ADD_MATERIAL_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Material")
        }
        else {
            console.log("Tabela Material populada com sucesso!")
        }
    });
}


Database.serialize(()=>{
    criaTabelaMat();
    populaTabelaMat();
})