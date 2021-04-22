/// <reference types="cypress" />


import testeElementos from '../ElementosPage/testeElementos'
const Elementos = new testeElementos
const NavegadorURL = Cypress.config("baseUrl")

class TestePage {
    abrirURL() {

        cy.visit(NavegadorURL)
    }

    preencherFormulario() {
        cy.get(Elementos.campoPrimeiroNome()).type('Debiny')
        cy.get(Elementos.campoUltimoNome()).type('Rocha')
        cy.get(Elementos.campoAdress()).type('Rua teste')
        cy.get(Elementos.campoEmailAdress()).type('teste@teste.com.br')
        cy.get(Elementos.campoPhone()).type('1196565656')
        cy.get(Elementos.campoGenderMale()).click()
        cy.get(Elementos.botaoHobbiesCricket()).click()
        
        cy.wait(2000)
        
        cy.get(Elementos.campoLanguages()).click({force: true})
        cy.get(Elementos.selectLanguageArabic()).click()
        cy.get(Elementos.clickForaDoCampo()).click()     

        cy.get(Elementos.campoSkills()).select('Android') 

        cy.get(Elementos.campoCountry()).select('Brazil')

        cy.get(Elementos.campoSelectCountry()).click({force: true})   
        cy.get(Elementos.selectCountryAustralia()).click()        
        
        cy.get(Elementos.campoYear()).select('2001')
        cy.get(Elementos.campoMonth()).select('January')
        cy.get(Elementos.campoDay()).select('3')
        cy.get(Elementos.campoFirstPassword()).type('teste123')
        cy.get(Elementos.campoConfirmPassmword()).type('teste123')

    }

   
    
    clicarbotaoRefresh() {
        cy.get(Elementos.botaoRefresh()).click();
    }

    validarTelaLimpa() {
        cy.screenshot()
    }
}
export default TestePage;