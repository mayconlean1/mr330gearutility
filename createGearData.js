module.exports = {
    createGearsData(data = {gearPosition:{}, latheScrewPitch:2, gearLatheDefault:40}){
        const defaultData = {latheScrewPitch: 2,gearLatheDefault:40, ...data}
        const {gearPosition, latheScrewPitch, gearLatheDefault} = defaultData
        gearPosition['default'] = gearLatheDefault
        
        const schemas = generateSchemas(gearPosition)
        addGearsStepRatio(latheScrewPitch)
    
        
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
    
        function addGearsStepRatio(latheScrewPitch){
            for(let schemaIndex in schemas){
                const ratio = calculateRatio(schemas[schemaIndex].reduction)
                schemas[schemaIndex]['ratio'] = ratio
                schemas[schemaIndex]['step'] = (ratio * latheScrewPitch).toFixed(3)
            }
        }
    
        return{
            getSchemas(){
                return schemas
            }
        }
    }
}