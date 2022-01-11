const {createGearsData} = require('./createGearData')

const gearLatheDefault = 40
const latheScrewPitch = 2

const gearPosition = {
    // 'default' : gearLatheDefault,
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


console.log(currentGears.getSchemas())
