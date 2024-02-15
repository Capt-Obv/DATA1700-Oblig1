let countBilett = 0;
const biletter = [];
let error = false;

$(document).ready(function () {
    $('#alleBilletter').hide();
});
function kjopBilett(){

    const filmQ = $("#velgFilm");

    const antallQ = $("#antall");
    //let inputAntall = antallQ.val();

    const fornavnQ = $("#fornavn");
    //let inputFornavn = fornavnQ.val();

    const etternavnQ = $("#etternavn");
    //let inputEtternavn = etternavnQ.val();

    const telefonQ = $("#telefonnr");
    //let inputTelefonnr = telefonQ.val();

    const epostQ = $("#epost")
    //let inputEpost = epostQ.val();

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
        //dynamicTable(billet);

        if(biletter.length >= 1){
            $('#alleBilletter').show();
            let tbody = $('#billettTable > tbody');

            let outputStr = '<tr>';
            let ouput = Object.values(biletter[biletter.length -1]);
            ouput.forEach(i => {
                outputStr += '<td>'+i.toString()+ '</td>';
            });
            outputStr += '</tr>';
            tbody.append(outputStr);
        }

        filmQ.prop('selectedIndex', 0);
        antallQ.val("");
        fornavnQ.val("");
        etternavnQ.val("");
        telefonQ.val("");
        epostQ.val("");
    }
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
    console.log(biletter);
    const tableDiv = document.querySelector("div.bilettTabell");
    while (tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild);
    biletter.length = 0;
    countBilett = 0;
}

const dynamicTable= () => {
    let input = Object.values(biletter[biletter.length -1]);
    const tabell = document.querySelector("div.bilettTabell");
    if (biletter.length === 1) {
        creatTableHead(tabell);
        newRow(input, tabell);

        countBilett++;
    } else {
        newRow(input, tabell);
    }
}
const header = ["Film", 'Antall', 'Fornavn', 'Etternavn', 'Telefonnr', 'Epost'];
const creatTableHead= (tabell,bilett) => {
    let table = document.createElement('table');
    table.className = 'table';

    let tableHead = document.createElement('thead');
    tableHead.className = 'tableHead';

    let tableHeaderRow = document.createElement('tr');
    tableHeaderRow.className = 'tableHeaderRow';

    header.forEach(header => {
        let scoreHeader = document.createElement('th');
        scoreHeader.innerText = header;
        tableHeaderRow.append(scoreHeader);
    })

    tableHead.append(tableHeaderRow);
    tabell.append(tableHead);
}

const newRow = (billett, tabell) => {
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    billett.forEach(i => {
        let cell = document.createElement('td');
        cell.innerText = i;
        tableRow.append(cell);
    })
    tableBody.append(tableRow);
    tabell.append(tableBody);
}


