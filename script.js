const gearLatheDefault = 40
const latheScrewPitch = 2

const gearPosition = {
    'default' : gearLatheDefault,
    'a': [50 , 80],
    'b': [90, 33 ],
    'c' : [null, 90] 
}

const rules = {
    schemas : [
        [gearPosition.default , gearPosition.a[1] , gearPosition.b[1], gearPosition.c[1]],
        [gearPosition.default , gearPosition.a[1] ,gearPosition.a[0] , gearPosition.b[0], gearPosition.c[0]],
        [gearPosition.default , gearPosition.a[1] , gearPosition.b[1], gearPosition.b[0], gearPosition.c[0]],
        [gearPosition.default , gearPosition.a[1] ,gearPosition.a[0] , gearPosition.b[0], gearPosition.b[1], gearPosition.c[1]],
    ],
    ratios : [
        [gearPosition.default / gearPosition.a[1], gearPosition.a[1] /gearPosition.b[1], gearPosition.b[1]/ gearPosition.c[1]],
        [gearPosition.default / gearPosition.a[1], gearPosition.a[0] /gearPosition.b[0], gearPosition.b[0]/ gearPosition.c[0]],
        [gearPosition.default / gearPosition.a[1] , gearPosition.b[1]/ gearPosition.b[1], gearPosition.b[0] / gearPosition.c[0]],
        [gearPosition.default / gearPosition.a[1], gearPosition.a[0] / gearPosition.b[0], gearPosition.b[1]/ gearPosition.c[1]],
    ]
}



const currentGears = createGearsData({gearPosition})

function createGearsData(data = {gearPosition:{}}){
    const {gearPosition} = data
    
    const schemas = generateSchemas(gearPosition)
    
    function generateSchemas (gearPosition= {}){
        return {
            0 : {
                mounting: 
                    {D: gearPosition.a[1] , E: gearPosition.b[1], L:gearPosition.c[1]},
        
                reduction :
                    [gearPosition.default / gearPosition.a[1], gearPosition.a[1] /gearPosition.b[1], gearPosition.b[1]/ gearPosition.c[1]],
            },
            1 : {
                mounting: 
                    {D :gearPosition.a[1] , G:gearPosition.a[0] , F:gearPosition.b[0],L: gearPosition.c[0]},
        
                reduction :
                    [gearPosition.default / gearPosition.a[1], gearPosition.a[0] /gearPosition.b[0], gearPosition.b[0]/ gearPosition.c[0]],
            },
            2 : {
                mounting: 
                    {D: gearPosition.a[1] , E: gearPosition.b[1], F:gearPosition.b[0], L: gearPosition.c[0]},
        
                reduction :
                    [gearPosition.default / gearPosition.a[1] , gearPosition.b[1]/ gearPosition.b[1], gearPosition.b[0] / gearPosition.c[0]],
            },
            3 : {
                mounting: 
                    { D: gearPosition.a[1] , G: gearPosition.a[0] , F: gearPosition.b[0], E: gearPosition.b[1], L: gearPosition.c[1]},
        
                reduction :
                    [gearPosition.default / gearPosition.a[1], gearPosition.a[0] / gearPosition.b[0], gearPosition.b[1]/ gearPosition.c[1]],
            },
        }
    }
    
    for(let schemaIndex in schemas){
        
        const ratio = calculateRatio(schemas[schemaIndex].reduction)
        schemas[schemaIndex]['ratio'] = ratio
    }
    
    function calculateRatio(reduction){
                
        const filtredRatio = ! (reduction.indexOf(Infinity) > -1) ? reduction : false
        let totalRatio
        if (filtredRatio){
            totalRatio =  filtredRatio.reduce((totalRatio,ratio, i)=>{
                if(i != 0){
                    totalRatio = totalRatio * ratio
                }
                
                return totalRatio
            },filtredRatio[0])
        }

        return totalRatio
        
    }

    return{
        getSchemas(){
            return schemas
        }
    }
}

console.log(currentGears.getSchemas())


// const schemasRatio = {}
// console.log(rules.ratios)

// rules.ratios.forEach((schema,schemaIndex)=>{
//     const filtredRatio = ! (schema.indexOf(Infinity) > -1) ? schema : false
//     if (filtredRatio){
//         const totalRatio =  filtredRatio.reduce((totalRatio,ratio, i)=>{
//             if(i != 0){
//                 totalRatio = totalRatio * ratio
//             }
            
//             return totalRatio
//         },filtredRatio[0])
//         // console.log('totalRatio' ,(totalRatio * latheScrewPitch).toFixed(3))
//         schemasRatio[schemaIndex] = totalRatio
//     }
// })

// console.log(schemasRatio)