
const biletter = [];
function kjopBilett(){
    let error = false;
    let inputFilm = $("#velgFilm").val();
    let inputAntall = $("#antall").val();
    if(antall < 0 || isNaN(antall)){
        $("#antallError").html("Antall må være ett positivt nummer!").css('color','red');
        error = true;
    }
    let inputFornavn = $("#fornavn").val();
    if(inputFornavn.length === 0){
        $("#fornavnError").html("Må skrive noe inn i fornavn").css('color', 'red');
        error = true;
    }
    let inputEtternavn = $("#etternavn").val();
    if(inputEtternavn.length === 0){
        $("#etternavnError").html("Må skrive noe inn i etternavn").css('color', 'red');
        error = true;
    }
    let inputTelefonnr = $("#telefonnr").val();
    if(inputTelefonnr.length === 0){
        $("#telfonnrError").html("Må skrive noe i telefonnr").css('color', 'red');
        error = true
    }
    let inputEpost = $("#epost").val();
    if(inputEpost.length === 0){
        $("#epostError").html("Må skrive noe i epost").css('color', 'red');
        error = true;
    }
    if(error) return;

    let billet = {
        film : inputFilm,
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };
    biletter.push(billet);
}