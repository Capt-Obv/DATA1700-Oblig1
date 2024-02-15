//The array that billetter get saved
const biletter = [];
//boolean variable to keep track if a validation have gone bad
let error = false;

//function to hide the table on window load
$(document).ready(function () {
    $('#alleBilletter').hide();
});
//function to save the ticket validate and display
function kjopBilett(){

    const filmQ = $("#velgFilm");

    const antallQ = $("#antall");

    const fornavnQ = $("#fornavn");

    const etternavnQ = $("#etternavn");

    const telefonQ = $("#telefonnr");

    const epostQ = $("#epost")

    validateAntall(antallQ);
    validateFornavn(fornavnQ);
    validateEtternavn(etternavnQ);
    validateTelefonnr(telefonQ);
    validateEpost(epostQ);

    if(!error) {
        let billet = {
            film: filmQ.val(),
            antall: antallQ.val(),
            fornavn: fornavnQ.val(),
            etternavn: etternavnQ.val(),
            telefonnr: telefonQ.val(),
            epost: epostQ.val()
        };
        biletter.push(billet);

        if(biletter.length >= 1){
            $('#alleBilletter').show();
            newRow();
        }

        filmQ.prop('selectedIndex', 0);
        antallQ.val("");
        fornavnQ.val("");
        etternavnQ.val("");
        telefonQ.val("");
        epostQ.val("");
    }
}
//function to add a new row to the table
function newRow()   {
    let tbody = $('#billettTable > tbody');

    let outputStr = '<tr>';
    let ouput = Object.values(biletter[biletter.length -1]);
    ouput.forEach(i => {
        outputStr += '<td>'+i.toString()+ '</td>';
    });
    outputStr += '</tr>';
    tbody.append(outputStr);
}
function validateAntall(target){
    let antall = parseInt(target.val());
    if(Number.isNaN(antall) || antall<= 0){
        $("#antallError").html("Antall må være ett positivt nummer!").css('color','red');
        error = true;
    }
}
function validateFornavn(target){
    if(target.val().length === 0) {
        $("#fornavnError").html("Må skrive noe inn i fornavn").css('color', 'red');
        error = true;
    }
}
function validateEtternavn(target){
    if(target.val().length === 0){
        $("#etternavnError").html("Må skrive noe inn i etternavn").css('color', 'red');
        error = true;
    }
}
function validateTelefonnr(target){
    let regex = new RegExp(/^[+]*[0-9]{1,10}[-\s\./0-9]*$/);
    let antall = target.val();
    if(!antall.match(regex)){
        $("#telfonnrError").html("Må skrive ett gyldig telefonnr").css('color', 'red');
        error = true;
    }
}

function validateEpost(target){
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let epost = target.val();
    if(!epost.match(regex)) {
        $("#epostError").html("Må skrive en gyldig epost-addresse").css('color', 'red');
        error = true;
    }
}
function slettBiletter(){
    //first i remove all tablerows except the head
    $('#billettTable').find('tr:gt(0)').remove();
    //hide the head row
    $('#alleBilletter').hide();
    //delete the biletter array
    biletter.length = 0;
}




