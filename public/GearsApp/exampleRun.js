const initGearsApp = require('./initGearApp')

const targetPitch = 1.587
const range =  0.001

const gearsAvailable = [
    90, 90, 80, 80,
    75, 70, 66, 60, 
    50, 42, 40, 33, 30
]

const gearsApp = initGearsApp({gearsAvailable})

gearsApp.setTargetPitch(1.75)
const gears = gearsApp.searchBestCombinations(targetPitch, range)

console.log(gears.layout1)

