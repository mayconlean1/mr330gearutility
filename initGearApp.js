const createDataLayouts = require('./createGearDataLayout')
const searchPitchTarget = require('./searchPitchTarget')

module.exports = initGearsApp

function initGearsApp(gearsAvailable=[]){
    let latheScrewPitch = 2
    let gearLatheDefault = 40

    let targetPitch
    let range = 0.001 // tolerance limit

    let gearsDataLayout = createDataLayouts({gearsAvailable})
    let bestCombinations

    return{
        getAvailable(){
            return gearsAvailable
        },
        setAvailable(array=[]){
            gearsAvailable = array
            gearsDataLayout = createDataLayouts({gearsAvailable})
        },

        getLatheScrewPitch (){
            return latheScrewPitch
        },
        setLatheScrewPitch(value = 2){
            latheScrewPitch = value
        },

        getGearLatheDefault(){
            return gearLatheDefault
        },
        setGearLatheDefault(value= 40){
            gearLatheDefault = value
        },

        getTargetPitch(){
            return targetPitch
        },
        setTargetPitch (value=Number){
            targetPitch = value
        },

        getToleranceLimit(){
            return range
        },
        setToleranceLimit(value= 0.001){
            range = value
        },

        searchBestCombinations(pitch, toleranceLimit){
            if(pitch || targetPitch){
                const priorityTargetPitch = pitch? pitch : targetPitch
                const priorityRange = toleranceLimit? toleranceLimit : toleranceLimit ===0? 0: range
                
                bestCombinations = searchPitchTarget({gearsDataLayout,targetPitch: priorityTargetPitch,range: priorityRange})
                return bestCombinations
            }
            else{
               throw Error('Configure o passo desejado na funçao do objeto "setTargetPitch(Number)"')
            }
        },

        getlastBestCombinations(){
            return bestCombinations
        }

        
    }
}
