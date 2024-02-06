let count = 0;
const biletter = [];
function kjopBilett(){
    let error = false;
    const filmQ = $("#velgFilm");
    let inputFilm = filmQ.val();

    filmQ.prop("selected", function (){
        return this.defaultSelected;
    });

    const antallQ = $("#antall");
    let inputAntall = antallQ.val();

    const fornavnQ = $("#fornavn");
    let inputFornavn = fornavnQ.val();

    const etternavnQ = $("#etternavn");
    let inputEtternavn = etternavnQ.val();

    const telefonQ = $("#telefonnr");
    let inputTelefonnr = telefonQ.val();

    const epostQ = $("#epost")
    let inputEpost = epostQ.val();

/*
    if(inputAntall <=0 || isNaN(inputAntall)){
        $("#antallError").html("Antall må være ett positivt nummer!").css('color','red');
        error = true;
    }


    if(inputFornavn.length === 0){
        $("#fornavnError").html("Må skrive noe inn i fornavn").css('color', 'red');
        error = true;
    }



    if(inputEtternavn.length === 0){
        $("#etternavnError").html("Må skrive noe inn i etternavn").css('color', 'red');
        error = true;
    }

    if(inputTelefonnr.length === 0){
        $("#telfonnrError").html("Må skrive noe i telefonnr").css('color', 'red');
        error = true
    }

    if(inputEpost.length === 0){
        $("#epostError").html("Må skrive noe i epost").css('color', 'red');
        error = true;
    }
*/
    let billet = {
        film : inputFilm,
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };
    biletter.push(billet);
    let input = Object.values(billet);
    const tabell = document.querySelector("div.bilettTabell");
    if(count === 0){
        creatTableHead(tabell);
        newRow(input, tabell);

        count++;
    }
    else {
        newRow(input, tabell);
    }

}

function slettBiletter(){
    console.log(biletter);
    const tableDiv = document.querySelector("div.bilettTabell");
    while (tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild);
    biletter.length = 0;
    //biletter.forEach(biletter.pop());
    console.log(biletter);
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


