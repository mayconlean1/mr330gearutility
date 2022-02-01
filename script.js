const createGearsData = require('./createGearData')
const createGearsLayout = require('./createGearLayout')

const targetPitch = 3.2
const range = 0.01

const gearsAvailable = [
    90, 90, 80, 80,
    75, 70, 66, 60, 
    50, 42, 40, 33, 30
]

const targetLayout = searchPitchTarget({gearsAvailable, targetPitch})

function searchPitchTarget(data={ gearsAvailable :[],targetPitch:Number, range:0.01}){
    const defaultData = {gearsAvailable :[],targetPitch:Number, range:0.01, ...data}
    const {gearsAvailable , targetPitch, range} = defaultData
    
    const gearsLayout = createGearsLayout(gearsAvailable)
    const gearsDataLayout = {}
   
    for (let indexLayout in gearsLayout){
        const gearLayout = gearsLayout[indexLayout]
        gearLayout.forEach(layout =>{
            if(!gearsDataLayout[indexLayout]){
                gearsDataLayout[indexLayout] = []
            }
            gearsDataLayout[indexLayout].push(createGearsData({gearPosition:layout}))
            
        })  
    }
    console.log(gearsDataLayout[1][500].getSchemas())
    

}
