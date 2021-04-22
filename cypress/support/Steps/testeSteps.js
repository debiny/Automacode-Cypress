/* global Given, When,Then,And */

import testePage from '../pageobjects/testePage'
const Pagina = new testePage


Given("que estou no site da Automation", () => {
    Pagina.abrirURL();
})

When("preencho o formulario", () => {
    Pagina.preencherFormulario();

})

And("clico no botão Refresh", () => {
    Pagina.clicarbotaoRefresh();
})

Then("verifico que a tela foi atualizada", () => {
    Pagina.validarTelaLimpa();
})