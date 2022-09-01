const displayOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

const checkList = {

    
    checkRoom: function(x = 'undefined'){ //This function takes the mintues and converts it to hours
        let roomClean
        if(x === "clean"){
            displayOnPage('Your room is clean')
             roomClean = true
        }else {
            displayOnPage('Your room is dirty')
             roomClean = false
        
        }
},
    checkAssignments: function(x){ 
        let hwStatus
        if(x === 'complete'){
            displayOnPage('Your homework is done')
             hwStatus = true //global varible 
        }else {
            displayOnPage("Your homework isn't complete")
             hwStatus = false
        
        }
    },
    hasFreeTime: function(roomClean, hwStatus){
        if(roomClean & hwStatus){
            displayOnPage('You are free for the rest of the day')
        } else {
            displayOnPage('You must finish your HW and or room')
        }
        },

}

displayOnPage('<b> Is your room clean?</b>') 
checkList.checkRoom('clean')
displayOnPage('<b> Is your homework done?</b>') 
checkList.checkAssignments('complete')
displayOnPage('<b> Do you have free time?</b>') 
checkList.hasFreeTime(roomClean, hwStatus)






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
//displayOnPage(output)