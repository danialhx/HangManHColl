/**
* printRight
*
* takes correct letter and passes it to front end
*
* @param {bool}   bool     
* @param {string}  inputLetter    
* 
* @return {return} 
*/

function printRight(bool, inputLetter){
    
    $( "#rightLetter" ).append( $( "h2" )).val(`${inputLetter}`);
    
}