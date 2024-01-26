let count = 0;
const biletter = [];
function kjopBilett(){
    let error = false;
    let inputFilm = $("#velgFilm").val();
    //var option = inputFilm.options[inputFilm.selectedIndex].value;
    //inputFilm = inputFilm.val();
/*
    if(option === 0){
        //må skirve feilmelding her!
        error = true;
    }

 */
    let inputAntall = $("#antall").val();

    if(inputAntall <=0 || isNaN(inputAntall)){
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
    /*
    let tableContainer = $("biletter");
    //if(error) return;
    if(biletter.length === 0){
        tableContainer.innerHTML = generateTableHead();
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

    //tableContainer.innerHTML = leggTilBilett(billet);
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
/*
function generateTableHead(){
    let table = "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>epost</th>"+
        "</tr>";
    return table;
}

 */

function leggTilBilett(bilett){
    let table = "";
    biletter.forEach(bilett => {
        table += "<tr>" +
            "<td>${bilett.film}</td><td>${bilett.antall}</td><td>${bilett.fornavn}</td>"+
            "<td>${bilett.etternavn}</td><td>${bilett.telefonnr}</td><td>${bilett.epost}</td>";
    });
    return table;
}