const createGearsData = require('./createGearData')
const createGearsLayout = require('./createGearLayout')

const targetPitch = 3.2
const range = 0.001

const gearsAvailable = [
    90, 90, 80, 80,
    75, 70, 66, 60, 
    50, 42, 40, 33, 30
]


const gearsLayout = createGearsLayout(gearsAvailable)
const gearsData = []

// gearsLayout[0].forEach(layout =>{
//     gearsData.push(createGearsData({gearPosition:layout}))
// })
// console.log(gearsLayout[1])

// const gearsData = []
// gearsLayout[3].forEach(layout =>{
//     gearsData.push(createGearsData({gearPosition:layout}))
// })
function joinArrays(object={}){
    const array = Object.values( object).reduce((acc, schema)=>{
        acc.push(schema)
        return acc
    },[])
    return array[0]

}
// console.log(gearsLayout[0])

// const gearPosition = {
//     'a': [50 , 80],
//     'b': [90, 33 ],
//     'c' : [null, 90] 
// }

// const currentGears = createGearsData({gearPosition})

// console.log(currentGears.getSchemas())
