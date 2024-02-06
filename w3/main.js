let carbonfrootprintPoints = 0;

function determineHousepointPts (numberInHousehold) {
        if(numberInHousehold == 1) {
        carbonfrootprintPoints = carbonfrootprintPoints +14;
    }   else if(numberInHousehold ==2){
        carbonfrootprintPoints = carbonfrootprintPoints +12
    }   else if(numberInHousehold ==3){
        carbonfrootprintPoints = carbonfrootprintPoints +10
    }   else if(numberInHousehold ==4){
        carbonfrootprintPoints = carbonfrootprintPoints +8
    }   else if(numberInHousehold ==5){
        carbonfrootprintPoints = carbonfrootprintPoints +6
    }   else if(numberInHousehold ==6){
        carbonfrootprintPoints = carbonfrootprintPoints +4
    }   else if(numberInHousehold ==5){
        carbonfrootprintPoints = carbonfrootprintPoints +2
    }   
    console.log(`based on the number in the Household of ${numberInHousehold} the points would be ${carbonfrootprintPoints}`)
}
determineHousepointPts(3);
determineHousepointPts(4);


