class testeElementos {

    campoPrimeiroNome = () => { return ':nth-child(1) > :nth-child(2) > .form-control' }
    campoUltimoNome =() => {return ':nth-child(1) > :nth-child(3) > .form-control'}
    campoAdress =() => {return '.col-md-8 > .form-control'}    
    campoEmailAdress =() => {return '#eid > .form-control'}   
    campoPhone =() => {return ':nth-child(4) > .col-md-4 > .form-control'}    
    campoGenderMale =() => {return ':nth-child(1) > .ng-pristine'}  
    campoGenderFeMale =() => {return ':nth-child(5) > .col-md-4 > :nth-child(2)'}   
    botaoHobbiesCricket = () => { return '#checkbox1' }
    botaoHobbiesMovies = () => { return '#checkbox2' }
    botaoHobbiesHockey = () => { return '#checkbox3' }
    campoLanguages = () => {return '.ui-autocomplete-multiselect'}
    campoSkills = () => { return '#Skills' }
    campoCountry = () => { return '#countries' }
    campoSelectCountry = () => { return '.select2-selection' } 
    selectCountryAustralia = () => { return '#select2-country-results > :nth-child(1)' } 

    campoYear = () => { return '#yearbox' }
    campoMonth = () => { return '[placeholder=Month]' }
    campoDay = () => { return '#daybox' }
    
    campoFirstPassword = () => { return '#firstpassword' }
    campoConfirmPassmword = () => { return '#secondpassword' }
    botaoRefresh = () => { return '#Button1' }
    botaoSubmit = () => { return '#submitbtn' }
    campoLanguages= () => { return '#msdd' }
    selectLanguageArabic= () => { return ':nth-child(1) > .ui-corner-all' }
    clickForaDoCampo= () => { return '#section > .container > .row' }
}
export default testeElementos;