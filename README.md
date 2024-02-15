Oblig 1
=======
OsloMet brukernavn: sofje9342@oslomet.no

GitHub brukernavn: Capt-Obv 

Github repo URL: https://github.com/Capt-Obv/DATA1700-Oblig1.git

Fullt navn: Solveig Andrea Devold Fjeld

Kort beskrivelse av applikasjon (5-10 setninger):
I have two global variables one array of billetter and one that checks for if input validation have gone wrong. Everytime
the 'Kjøp Billett' button is pressed the error messages  resets so that old error messages are removed, if necessary. 
I so get all the input query's, send them to the validation  function to check if the input is valid. If the input is 
wrong it prints an error message by the input box, set the error variable to true so that when the function check if 
error is true the function returns. If it is no  error then the error messages resets and a new bilett object is made
and pushed to the global array. If it is the first element in the array, then the table head is shown using the 
$('#id').show() function, and add a new row to the table using the newRow() function. The newRow() function makes a 
string that are the same as a row of a table in HTML and append it to the tbody of the table. The remove function remove
every row of the table, hide the table head and resets the array.