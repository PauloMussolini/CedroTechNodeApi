# CedroTech
Teste avaliatório da Empresa CedroTech
Desafio do BTG Pactual Digital 

## Tecnologias utilizadas

- Dot Net Core 3.1
- XUnit 

## Métodos
### api/version
- Exibe a versão da api

### api/login
- Login do usuário
Fornecer as seguintes credenciais:
{
    "Email": "paulo_mussolini@yahoo.com.br",
    "Password": "Secret"
}
- Retorno: Token  

### api/document/create
- Gera documento texto com as informações na pasta output
- Fornecer Token (Bearer Token) e as seguintes informações:
{
    "FullName": "Paulo de Tarso F Mussolini",
    "Email": "paulo_mussolini@yahoo.com.br",
    "CPF": "123456",
    "RG": "987654",
    "BornDate": "1964-02-07"
}



Paulo de Tarso F Mussolini