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
    const gearsLayout = { 
        ...generateAssemblies('layout_0'),
        ...generateAssemblies('layout_1'),
    }
    
    function generateAssemblies(layout=''){
        const gearsLayout = {}

        if(layout == 'layout_0'){
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
        }else if(layout == 'layout_1'){
            gearsAvailable.forEach((a0 ,a0i)=>{
                const remainingGears = [...gearsAvailable]
                remainingGears.splice(a0i, 1)
        
                let gearCombination = {a:[a0]}
        
                remainingGears.forEach((a1, a1i)=>{
        
                    remainingGears.splice(a1i, 1)
                    gearCombination["a"].push(a1) 
        
                    remainingGears.forEach((b0, b0i)=>{
                        remainingGears.splice(b0i, 1)
                        gearCombination["b"] = [b0, undefined] 

                        remainingGears.forEach((c0, c0i)=>{
        
                            remainingGears.splice(c0i, 1)
                            gearCombination["c"] = [c0, null]

                            if(!gearsLayout[1]){
                                gearsLayout[1] = []
                            }
                            gearsLayout[1].push(gearCombination)
            
                            gearCombination= {a:[a0, a1], b:[b0,undefined]}
                            
                        })
                    })
                })
        
            })
        }
    

        return gearsLayout


    }
    
    // console.log( gearsLayout)
    
    return  gearsLayout
    
}
const gearsLayout = createGearsLayout(gearsAvailable)
const gearsData = []
gearsLayout[1].forEach(layout =>{
    gearsData.push(createGearsData({gearPosition:layout}))
})

console.log(gearsData[70].getSchemas())

// const gearPosition = {
//     'a': [50 , 80],
//     'b': [90, 33 ],
//     'c' : [null, 90] 
// }


// const currentGears = createGearsData({gearPosition})


// console.log(currentGears.getSchemas())
