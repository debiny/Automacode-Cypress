
Feature: Automaçao de formulário

    Scenario: Preencher campo primeiro nome
        Given que estou no site da Automation 
        When  preencho o campo full name
        And clico no botão Refresh
        Then  verifico que a tela foi atualizada