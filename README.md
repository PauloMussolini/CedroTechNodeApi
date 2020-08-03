# CedroTech
Teste avaliatório da Empresa CedroTech
Desafio do BTG Pactual Digital 

## Tecnologias utilizadas
- Nodejs
- body-parser: "^1.19.0",
- cookie-parser: "^1.4.5",
- cors: "^2.8.5",
- dotenv-safe: "^8.2.0",
- express: "^4.17.1",
- http: "0.0.1-security",
- jsonwebtoken: "^8.5.1",
- swagger-ui-express: "^4.1.4"
- Docker

### Testes
- chai: "^4.2.0",
- chai-http: "^4.3.0",
- mocha: "^8.1.0",

## Métodos
### /
- Exibe a versão da api

### /login
- Login do usuário
Fornecer as seguintes credenciais:
{
    "Email": "paulo_mussolini@yahoo.com.br",
    "Password": "Secret"
}
- Retorno: Token  

### /document
- Gera documento texto com as informações na pasta output
- Fornecer Token (Bearer Token) e as seguintes informações:
{
    "FullName": "Paulo de Tarso F Mussolini",
    "Email": "paulo_mussolini@yahoo.com.br",
    "CPF": "123456",
    "RG": "987654",
    "BornDate": "1964-02-07"
}

## Instruções
### Clonar o repositório

- git clone https://github.com/PauloMussolini/CedroTechNodeApi.git

### Atualizar dependências

cd / CedroTechNodeApi
- npm install

### Executar
- npm start

### Acesso via Browser /  swagger
- http://localhost:3000/swagger

### Acesso via Postman
- http://localhost:3000/
- http://localhost:3000/login
- http://localhost:3000/document

### Testes
- npm test

## Instruções Docker
### Criar imagem a partir do Dockerfile
-Na pasta do projeto:
docker build -t namespace/imageName:version .

### Executar local

docker run -d --name ContainerName -p 3000:3000 namespace/imageName:version

Abrir o navegador
http://localhost:3000/swagger
ou Postman

Paulo de Tarso F Mussolini
