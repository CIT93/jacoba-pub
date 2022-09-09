const displayOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
   outputDiv.append(newParagraph)
 }

const activitiesList = [
    {
        actvity: 'Play Videogames',
        time: 1.0
    },{
        actvity: 'Judo',
        time: 2.5 //2 hours and 30mins
    },{
        actvity: 'Watch house of fire',
        time: 1.25 //1 hour and 15mins
    },{
        actvity: 'Cooking',
        time: .5 //30mins
    },{
        actvity: 'Clean Truck',
        time: 4 //4 hours
    }
]
let enoughTime = function(x){ //This function will check if i have enough time to do the activities. 

      for (let i = 0; i <= x.length; i++){
         if(x[i].time >= 2){ // 2 hours
          displayOnPage(x[i].actvity)
         }
     }
    }
enoughTime(activitiesList)
//printActivies(activitiesList)
//displayOnPage('test')

// const checkList = {

//     roomClean: true, 
//     hwStatus: false, 
//     checkRoom: function(x = 'undefined'){ //This function takes the mintues and converts it to hours
//         //let roomClean
//         if(x === "clean"){
//             displayOnPage('Your room is clean')
//              this.roomClean = true
//         }else {
//             displayOnPage('Your room is dirty')
//              this.roomClean = false
        
//         }
// },
//     checkAssignments: function(x){ 
//         //let hwStatus
//         if(x === 'complete'){
//             displayOnPage('Your homework is done')
//              this.hwStatus = true //global varible 
//         }else {
//             displayOnPage("Your homework isn't complete")
//              this.hwStatus = false
        
//         }
//     },
//     hasFreeTime: function(){
//         if(this.roomClean & this.hwStatus){
//             displayOnPage('You are free for the rest of the day')
//         } else {
//             displayOnPage('You must finish your HW and or room')
//         }
//         },

// }

// displayOnPage('<b> Is your room clean?</b>') 
// checkList.checkRoom('clean')
// displayOnPage('<b> Is your homework done?</b>') 
// checkList.checkAssignments('complete')
// displayOnPage('<b> Do you have free time?</b>') 
// checkList.hasFreeTime()






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