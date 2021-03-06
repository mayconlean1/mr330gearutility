function searchPitchTarget(data={ gearsDataLayout :[],targetPitch:Number, range:0.001}){
    const defaultData = {gearsAvailable :[],targetPitch:Number, range:0.001, ...data}
    const {gearsDataLayout , targetPitch, range} = defaultData

    const bestCombinations = searchBestCombination(gearsDataLayout, targetPitch, range)

    return bestCombinations

    function searchBestCombination(gearsDataLayout={},targetPitch=Number, range=Number){
        // targetPitch = 1.587
        // range = 0.000
    
        const layout0Combinations = []
        gearsDataLayout[0].forEach((layout)=>{
            const step = layout.getSchemas()[0].step
            const minimumStepTolerance = targetPitch - range
            const maximumStepTolerance = targetPitch + range
            if(step >= minimumStepTolerance && step <= maximumStepTolerance  ){
                layout0Combinations.push( layout.getSchemas()[0] )
            }
        })

        const layout1Combinations = []
        gearsDataLayout[1].forEach((layout)=>{
            const step = layout.getSchemas()[1].step
            const minimumStepTolerance = targetPitch - range
            const maximumStepTolerance = targetPitch + range
            if(step >= minimumStepTolerance && step <= maximumStepTolerance  ){
                layout1Combinations.push( layout.getSchemas()[1] )
            }
        })

        const layout2Combinations = []
        gearsDataLayout[2].forEach((layout)=>{
            const step = layout.getSchemas()[2].step
            const minimumStepTolerance = targetPitch - range
            const maximumStepTolerance = targetPitch + range
            if(step >= minimumStepTolerance && step <= maximumStepTolerance  ){
                
                layout2Combinations.push( layout.getSchemas()[2] )
            }
        })

        const layout3Combinations = []
        gearsDataLayout[3].forEach((layout)=>{
            const step = layout.getSchemas()[3].step
            const minimumStepTolerance = targetPitch - range
            const maximumStepTolerance = targetPitch + range
            if(step >= minimumStepTolerance && step <= maximumStepTolerance  ){
                layout3Combinations.push( layout.getSchemas()[3] )
            }
        })

        return {
            layout0: layout0Combinations,
            layout1 : layout1Combinations,
            layout2: layout2Combinations,
            layout3: layout3Combinations
        }
    }
}