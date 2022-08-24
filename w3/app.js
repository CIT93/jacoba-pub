const displayOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}


// let isHomeworkComplete = true
// let haveYouCleanedRoom = true


// if(isHomeworkComplete){ // If statement
//     displayOnPage("You've completed your homework")

// }else if(isHomeworkComplete === false){ // If else statement
//     displayOnPage('Finish your homework')
// }


// if(isHomeworkComplete && haveYouCleanedRoom) //and operator
// {
//     displayOnPage('<b>Play Mario Sunshine</b>')
// }

// if(!isHomeworkComplete || !haveYouCleanedRoom ){
//     displayOnPage("You haven't finished anything")
// }

//let time = howMuchTime(1) //global variable 

let mintueToHour = function(x = 'undefined'){ //This function takes the mintues and converts it to hours
hours = x/60
displayOnPage(`This is ${hours} hours`)
}

let hourToMintue = function(x){ //converts hours to mintues
    mintues = 60*x
    displayOnPage(`This is ${mintues} mintues`)
    return mintues
}
mintueToHour(120)
mintueToHour()
let currentTime = hourToMintue(.5)
let futuretime = hourToMintue(1)





//displayOnPage(output)