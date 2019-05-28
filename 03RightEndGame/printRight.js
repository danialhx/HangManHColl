
// /**
// * printRight
// *
// * takes correct letter and passes it to front end
// *
// * @param {bool}   correct    
// * @param {string}  inputLetter    
// * 
// * @return {return} 
// */

function printRight(correct, inputLetter){

    if(correct===true){
        $('<div>' + inputLetter + '</div>').appendTo('#rightWord').css('color', 'black');

    }else {
        $('<div>' + inputLetter + '</div>').appendTo('#rightWord').css('color', 'red');;

    }
        
   

   
    
}
