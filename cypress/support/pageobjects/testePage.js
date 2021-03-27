/// <reference types="cypress" />


import testeElementos from '../ElementosPage/testeElementos'
const Elementos = new testeElementos
const NavegadorURL = Cypress.config("baseUrl")

class TestePage {
    abrirURL() {

        cy.visit(NavegadorURL)
    }

    preencherCampoPrimeiroNome() {
        cy.get(Elementos.campoPrimeiroNome()).type('Debiny Rocha')
    }

    clicarbotaoRefresh() {
        cy.get(Elementos.botaoRefresh()).click();
    }

    validarTelaLimpa() {
        cy.screenshot()
    }
}
export default TestePage;