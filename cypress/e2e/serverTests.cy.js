import { getRandomInt } from '../support/commands';
import { home, cadastrarUsuarios } from '../support/e2e';
describe('Suite de testes de login', () => {

  beforeEach(() => {
     cy.visit('https://front.serverest.dev/login');
  });
  
  it('login inválido', () => {
    cy.get(home.LblEmail).type(`emailinvalido@teste.com.br`);
    cy.get(home.LblPassword).type(`senha invalida`);
    cy.get(home.BtnSubmit).click();
    cy.get(home.AlertMessage).should('contain', 'Email e/ou senha inválidos');
  });

  const novoUsuario = `emailvalido${getRandomInt(1000)}@teste.com.br`

  it('Criar usuário', () => {
    cy.get(cadastrarUsuarios.btnCadastrar).click();
    cy.get(cadastrarUsuarios.lblNome).type('Usuário de Teste');
    cy.get(home.LblEmail).type(novoUsuario);
    cy.get(home.LblPassword).type(`senha valida`);
    cy.get(home.BtnSubmit).click();
    cy.get(home.AlertMessage).should('contain', 'Cadastro realizado com sucesso');
  });


  it('login válido', () => {
    cy.get(home.LblEmail).type(novoUsuario);
    cy.get(home.LblPassword).type('senha valida');
    cy.get(home.BtnSubmit).click();
    cy.url().should('contain', '/home');
  });

  
});
    