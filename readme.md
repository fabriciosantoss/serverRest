# 🧪 Automação Web com Cypress — Serverest Front

Este projeto contém uma suíte de testes automatizados utilizando **Cypress** para validar funcionalidades do front-end da aplicação pública **ServeRest**.  
Os testes cobrem fluxos essenciais como login, criação de usuário e validações de erro.

---

## 🚀 Tecnologias Utilizadas

- 🧩 **Cypress**
- 🧭 **Node.js**
- 🔁 **Page Object Pattern**
- 🎲 Utilitário para geração dinâmica de dados (`getRandomInt()`)

---

## 📦 Instalação

1. Clone este repositório:

```sh
    git clone https://github.com/seuusuario/nome-do-repositorio.git
    cd nome-do-repositorio
```

2.  Instale as dependências:
```
npm install
```
3. ▶️ Executando os Testes
```
    npx cypress open
            ou
    npx cypress run
```        
---

# 🧪 Testes de API com Jest + Supertest

Este projeto contém testes automatizados da API pública **ServeRest** utilizando **Jest** e **Supertest**.  
O objetivo é validar endpoints essenciais como autenticação e listagem de usuários.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Jest**
- **Supertest**

---

## 📦 Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seuusuario/nome-do-repo.git
cd nome-do-repo
```

2. Instale as dependencias:

   ``` 
    npm install
    ```
3. ▶️ Executando os Testes

     ``` 
    npm test
    ```
4. 📂 Estrutura dos Testes

    Atualmente os testes validam os seguintes cenários da API https://serverest.dev:
    | Cenário                         | Endpoint        | Status Esperado |
    | ------------------------------- | --------------- | --------------- |
    | Login bem-sucedido              | `POST /login`   | 200             |
    | Login com credenciais inválidas | `POST /login`   | 401             |
    | Listagem de usuários            | `GET /usuarios` | 200             |

5. 🧵 Fluxo do Teste
    Login válido

        Envia email e senha válidos

        Valida status 200

        Valida presença de token de autenticação

    Login inválido

        Envia credenciais incorretas

        Valida status 401

        Valida mensagem de erro retornada

    Listar usuários

        Realiza requisição GET

        Valida status 200

        Valida retorno do JSON   