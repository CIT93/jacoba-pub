const displayOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}


let isHomeworkComplete = true  
let haveYouCleanedRoom = false


if(isHomeworkComplete){ // If statement
    displayOnPage("You've completed your homework")

}else if(isHomeworkComplete === false){ // If else statement
    displayOnPage('Finish your homework')
}


if(isHomeworkComplete && haveYouCleanedRoom) //and operator
{
    displayOnPage('<b>Play Mario Sunshine</b>')
}

if(!isHomeworkComplete || !haveYouCleanedRoom ){
    displayOnPage("You haven't finished anything")
}

let time = howMuchTime(1) //global variable 

function howMuchTime(time) {
let a = 4 //local variable 
return a + time
}
 
displayOnPage(time)


//displayOnPage(output)