const request = require('supertest');

const serverUrl = 'https://serverest.dev';
let authorizationToken = '';

describe('Server REST API', () => {
    
    it('Deve realizar o login com sucesso', async () => {
        const response = await request(serverUrl)
            .post('/login')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({
                    "email": "fulano@qa.com",
                    "password": "teste"
                });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message');  
            expect(response.body).toHaveProperty('authorization'); 
            console.log("Authorization: " + response.body.authorization);
            authorizationToken = response.body.authorization;
            console.log("Message: " + response.body.message);
    })

    it('Tentar realizar o login com usuário inválido', async () => {
    const response = await request(serverUrl)
        .post('/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ 
                    email: "sicrano@qa.com",
                    password: "teste1"
             });
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('message');
            expect(response.body.message).toBe('Email e/ou senha inválidos');
    });

     it('Deve listar usuários', async () => {
    const response = await request(serverUrl)
        .get('/usuarios')
        .set('Accept', 'application/json')
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('quantidade');
            expect(response.body).toHaveProperty('usuarios');
    });


})