const filmer = [];
function velgFilm(){
    let film = document.getElementById("velgFilm");
    filmer.push(film);
}
const biletter = [];
function kjopBilett(){
    let error = false;
    let inputAntall = document.getElementById("antall");
    if(isNaN(inputAntall) || antall < 0){
        document.getElementById("antallError").innerText = "Antall må være ett positivt nummer!";
        error = true;
    }
    let inputFornavn = document.getElementById("fornavn");
    if(inputFornavn.length === 0){
        document.getElementById("fornavnError").innerText="Må skrive noe inn i fornavn";
        error = true;
    }
    let inputEtternavn = document.getElementById("etternavn");
    if(inputEtternavn.length === 0){
        document.getElementById("etternavnError").innerText="Må skrive noe inn i etternavn";
        error = true;
    }
    let inputTelefonnr = document.getElementById("telefonnr");
    if(inputTelefonnr.length === 0){
        document.getElementById("telfonnrError").innerText="Må skrive noe i telefonnr";
        error = true
    }
    let inputEpost = document.getElementById("epost");
    if(inputEpost.length === 0){
        document.getElementById("epostError").innerText="Må skrive noe i epost";
        error = true;
    }
    if(error) return;

    let billet = {
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };
    biletter.push(billet);
}