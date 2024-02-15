//The array that billetter get saved
const billetter = [];
let error = false;
//function to hide the table on window load
$(document).ready(function () {
    $('#alleBilletter').hide();
});
//function to save the ticket validate and display
function kjopBillett(){
    //updates the boolean value and the error messages everytime kjøp billett is pressed
    error = false;
    resetError();

    //geting every input query
    const filmQ = $("#velgFilm");
    const antallQ = $("#antall");
    const fornavnQ = $("#fornavn");
    const etternavnQ = $("#etternavn");
    const telefonQ = $("#telefonnr");
    const epostQ = $("#epost")

    //Validating every input and give error messages if wrong input.
    validateFilm(filmQ);
    validateAntall(antallQ);
    validateFornavn(fornavnQ);
    validateEtternavn(etternavnQ);
    validateTelefonnr(telefonQ);
    validateEpost(epostQ);

    //if one of the validation failed then return
    if (error) {
        return;
    }
    //Remove the error messages since no error
    resetError();
    //make object
    let billett = {
        film: filmQ.val(),
        antall: antallQ.val(),
        fornavn: fornavnQ.val(),
        etternavn: etternavnQ.val(),
        telefonnr: telefonQ.val(),
        epost: epostQ.val()
    };
    //push object to array
    billetter.push(billett);
    //if array is bigger than 0 show the table and add a new row.
    if (billetter.length >= 1) {
        $('#alleBilletter').show();
        newRow();
    }
    //reset the input fields
    filmQ.prop('selectedIndex', 0);
    antallQ.val("");
    fornavnQ.val("");
    etternavnQ.val("");
    telefonQ.val("");
    epostQ.val("");
}
//function to add a new row to the table
function newRow()   {
    //geting tbody wich is the child of #billettTable
    let tbody = $('#billettTable > tbody');

    //making the string to append to the table
    let outputStr = '<tr>';
    //getting the values of the last element of the array
    let output = Object.values(billetter[billetter.length -1]);
    //loop through the values and add it to the string
    output.forEach(i => {
        outputStr += '<td>'+i.toString()+ '</td>';
    });
    outputStr += '</tr>';
    //append to the table
    tbody.append(outputStr);
}
//function to reset the error messages
function resetError()   {
    $('#filmError').html('');
    $('#antallError').html('');
    $('#fornavnError').html('');
    $('#etternavnError').html('');
    $('#telfonnrError').html('');
    $('#epostError').html('');
}
//function to validate a film has been selected
function validateFilm(target) {
    if(target.val() === ''){
        $("#filmError").html('Må velge en film!').css('color', 'red');
        error = true;
    }
}
//function to validate that antall is a positive number
function validateAntall(target){
    let antall = parseInt(target.val());
    if(Number.isNaN(antall) || antall<= 0){
        $("#antallError").html("Antall må være ett positivt nummer!").css('color','red');
        error = true;
    }
}
//function to validate fornavn
function validateFornavn(target){
    if(target.val().length === 0) {
        $("#fornavnError").html("Må skrive noe inn i fornavn").css('color', 'red');
        error = true;
    }
}
//function to validate etternavn
function validateEtternavn(target){
    if(target.val().length === 0){
        $("#etternavnError").html("Må skrive noe inn i etternavn").css('color', 'red');
        error = true;
    }
}
//function to validate telefonnr
function validateTelefonnr(target){
    //uses regexp to validate: 8 numbers beetween 0 and 9
    let regex = new RegExp(/^[0-9]{8}$/);
    let antall = target.val();
    if(!antall.match(regex)){
        $("#telfonnrError").html("Må skrive ett gyldig telefonnr, 8 tall").css('color', 'red');
        error = true;
    }
}
//function to validate epost
function validateEpost(target){
    //using regexp here to validate
    //[\w-\.] means matches any word character, and also allow - and .
    //+@ it has to contain one @
    //([\w-]+\.) means matches any word character, and also -. And it has to contain one .
    //then +[\w-]{2,4} after the dot it has to match 2-4 word character wich is the country code.
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let epost = target.val();
    if(!epost.match(regex)) {
        $("#epostError").html("Må skrive en gyldig epost-addresse: a@a.com").css('color', 'red');
        error = true;
    }
}
//function to delete all the billetter
function slettBilletter(){
    //first i remove all tablerows except the head
    $('#billettTable').find('tr:gt(0)').remove();
    //hide the head row
    $('#alleBilletter').hide();
    //delete the biletter array
    billetter.length = 0;
}




