const {createGearsData} = require('./createGearData')

const targetPitch = 3.2

const gearsAvailable = [
    90, 90,
    80, 80,
    75,
    70,
    66, 
    60, 
    50,
    42,
    40,
    33,
    30
]


function createGearsLayout(gearsAvailable = []){
    const gearsLayout = { ...generateAssemblies('layout_0')}
    
    function generateAssemblies(layout=''){

        const gearsLayout = {}
    
        gearsAvailable.forEach((a1 ,a1i)=>{
            const remainingGears = [...gearsAvailable]
            remainingGears.splice(a1i, 1)
    
            let gearCombination = {a:[undefined, a1]}
    
            remainingGears.forEach((b1, b1i)=>{
    
                remainingGears.splice(b1i, 1)
                gearCombination["b"] = [undefined, b1]
    
                remainingGears.forEach((c1, c1i)=>{
    
                    remainingGears.splice(c1i, 1)
    
                    gearCombination["c"] = [null, c1]
                    if(!gearsLayout[0]){
                        gearsLayout[0] = []
                    }
                    gearsLayout[0].push(gearCombination)
    
                    gearCombination= {a:[undefined, a1], b:[undefined,b1]}
                    
                })
            })
    
        })

        return gearsLayout


    }
    
    console.log( gearsLayout)
    
    // gearsLayout[0].forEach(layout =>{
    //     gearsLayout0.push(createGearsData({gearPosition:layout}))
    // })

    return  gearsLayout
}

const gearsLayout = createGearsLayout(gearsAvailable)

console.log(gearsLayout[70].getSchemas())

// const gearPosition = {
//     'a': [50 , 80],
//     'b': [90, 33 ],
//     'c' : [null, 90] 
// }


// const currentGears = createGearsData({gearPosition})


// console.log(currentGears.getSchemas())
