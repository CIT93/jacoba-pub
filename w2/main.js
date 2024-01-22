const houseMembers = 10 // 2 in household
const houseSize = 7 //medium
const foodChoice = 12 // mostly prepackaged
const waterUseage = 2 // 4-9 times
const housePurchases = 2
const garbageCans = 30
const wasteRecycle = 8
const annualMileage = 12

const totatCarbonFootprint = houseMembers + houseSize + foodChoice +wasteRecycle + waterUseage + housePurchases +garbageCans + annualMileage

const myHeading = document.querySelector('h1')
myHeading.textContent = totatCarbonFootprint; 