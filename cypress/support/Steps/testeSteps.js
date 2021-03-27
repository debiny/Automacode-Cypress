/* global Given, When,Then,And */

import testePage from '../pageobjects/testePage'
const Pagina = new testePage


Given("que estou no site da Automation", () => {
    Pagina.abrirURL();
})

When("preencho o campo full name", () => {
    Pagina.preencherCampoPrimeiroNome();
})

And("clico no botão Refresh", () => {
    Pagina.clicarbotaoRefresh();
})

Then("verifico que a tela foi atualizada", () => {
    Pagina.validarTelaLimpa();
})