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

const schemas ={
    0 : {
        mounting: 
            [gearPosition.default , gearPosition.a[1] , gearPosition.b[1], gearPosition.c[1]],

        reduction :
            [gearPosition.default / gearPosition.a[1], gearPosition.a[1] /gearPosition.b[1], gearPosition.b[1]/ gearPosition.c[1]],
    },
    1 : {
        mounting: 
            [gearPosition.default , gearPosition.a[1] ,gearPosition.a[0] , gearPosition.b[0], gearPosition.c[0]],

        reduction :
            [gearPosition.default / gearPosition.a[1], gearPosition.a[0] /gearPosition.b[0], gearPosition.b[0]/ gearPosition.c[0]],
    },
    2 : {
        mounting: 
            [gearPosition.default , gearPosition.a[1] , gearPosition.b[1], gearPosition.b[0], gearPosition.c[0]],

        reduction :
            [gearPosition.default / gearPosition.a[1] , gearPosition.b[1]/ gearPosition.b[1], gearPosition.b[0] / gearPosition.c[0]],
    },
    3 : {
        mounting: 
            [gearPosition.default , gearPosition.a[1] ,gearPosition.a[0] , gearPosition.b[0], gearPosition.b[1], gearPosition.c[1]],

        reduction :
            [gearPosition.default / gearPosition.a[1], gearPosition.a[0] / gearPosition.b[0], gearPosition.b[1]/ gearPosition.c[1]],
    },
}


const schemasRatio = {}
rules.ratios.forEach((schema,schemaIndex)=>{
    const filtredRatio = ! (schema.indexOf(Infinity) > -1) ? schema : false
    if (filtredRatio){
        const totalRatio =  filtredRatio.reduce((totalRatio,ratio, i)=>{
            if(i != 0){
                totalRatio = totalRatio * ratio
            }
            
            return totalRatio
        },filtredRatio[0])
        // console.log('totalRatio' ,(totalRatio * latheScrewPitch).toFixed(3))
        schemasRatio[schemaIndex] = totalRatio
    }
})

console.log(schemasRatio)