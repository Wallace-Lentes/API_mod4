# Ecomart 🌿

Bem-vindo ao repositório da Ecomart

Aqui você vai encontrar a parte do back-end de um site em construção. 

## Descrição: 🌱

A Ecomart é uma empresa inovadora que se destaca por sua missão ambientalmente consciente e socialmente responsável. Com um compromisso firme com a sustentabilidade, a Ecomart criou um modelo de negócios único, incentivando a troca de materiais recicláveis por alimentos frescos e saudáveis. Localizada atualmente em Curitiba, a empresa oferece um ambiente acolhedor e amigável onde os moradores podem trazer seus materiais recicláveis, como plástico, papelão e vidro, em troca de créditos para comprar alimentos nutritivos. Ao promover a reciclagem e a alimentação saudável, a Ecomart não apenas contribui para a preservação do meio ambiente, mas também ajuda a combater a insegurança alimentar, fortalecendo o tecido social das comunidades onde atua. Essa abordagem visionária da Ecomart representa um passo importante em direção a um mundo mais sustentável e equitativo.

## Requisitos: 🌴

Antes de iniciar, verifique se você possui as seguintes tecnologias instaladas em sua máquina:

- VSCode
- Node.js
- Insomnia

## Como clonar o Projeto: 🌵

1. Abra o terminal e clone o prjeto com o comando:
- Git Clone https://github.com/Wallace-Lentes/API_mod4.git
2. Entre no diretório:
- Cd API_mod4
3. Instalação das Dependências com o comando:
- npm install
4. Rode o projeto com:
- 

## Como Rodar o Projeto na sua Maquina: 🍀

## Banco de Dados:  🪴

O projeto conta com 5 entidades, que são:

- Carrinho 
- Historico
- Materiais Reciclaveis 
- Produtos
- Usuarios 

# Exemplos de Uso
- Listar todos os usuários:
GET http://localhost:3000/usuarios

- Criar um novo usuário:
POST http://localhost:3000/usuarios
{
"nome": "João",
"email": "joao@email.com"
}

- Alterar alguma informação de um usuário específico: 
PUT http://localhost:3000/usuarios/id
{
"nome": "Osvaldo",
"email": "osvaldo@email.com"
}

- Alterar alguma informação específica de um usuário específico: 
PATCH http://localhost:3000/usuarios/id
{
""nome": "Osvaldo da Silva",
"email": "osvaldo@email.com"
}

- Deletar o usuário: 
DELETE  http://localhost:3000/usuarios/id

*Para utilizar as outras entidades, é só trocar o usuário pela entidade que gostaria

## tecnologias Utilizadas: 📌

- Node.js
- Express
- Sqlite3
- Insomnia

## Referências: ✅

- [Documentação Node](https://nodejs.org/en/)
- [Documentação Sqlite3](https://www.sqlite.org/docs.html)
- [Documentação Express](https://expressjs.com/pt-br/)
- [Documentação Insomnia](https://insomnia.rest/)

## Projeto desenvolvido por:

- Ana Caroline Henrique de Oliveira
- Beatriz Silva dos Santos
- Isabella Vicente
- Isabelle Pontes 
- Wallace Lentes
