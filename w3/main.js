let carbonfrootprintPoints = 0;

function determineHouseSize(houseSize){
    if(houseSize == 'Small'){
        carbonfrootprintPoints = carbonfrootprintPoints + 7;
    } else if (houseSize == "Medium"){
        carbonfrootprintPoints = carbonfrootprintPoints + 4;
     } else if (houseSize == 'Large'){
        carbonfrootprintPoints = carbonfrootprintPoints + 10;
     }else { //apartment
        carbonfrootprintPoints = carbonfrootprintPoints + 2;
     }
     console.log(`Base on your home size your carbonfootprint points would add ${carbonfrootprintPoints}`)
    }
determineHouseSize('Large')
