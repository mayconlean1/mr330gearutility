module.exports = createGearsLayout

function createGearsLayout(gearsAvailable = []){
    const gearsLayout = { 
        ...generateAssemblies('layout_0'),
        ...generateAssemblies('layout_1'),
        ...generateAssemblies('layout_2'),
        ...generateAssemblies('layout_3'),
    }
    
    function generateAssemblies(layout=''){
        const gearsLayout = {}

        
        if(layout == 'layout_0'){

            gearsAvailable.forEach((a1 ,a1i)=>{
                const gearsBAvailable = [...gearsAvailable]
                let gearCombination = {a:[undefined, a1]}
                // console.log(gearCombination)
                gearsBAvailable.splice(a1i, 1)
        
                gearsBAvailable.forEach((b1, b1i)=>{
                    gearCombination['b'] = [undefined , b1]
                    // console.log('for b', b1)
                    const gearsCAvailable = [...gearsBAvailable]
                    gearsCAvailable.splice(b1i, 1)
                    
                    gearsCAvailable.forEach((c1, c1i)=>{
        
                        // remainingGears.splice(c1i, 1)
        
                        gearCombination["c"] = [null, c1]
                        if(!gearsLayout[0]){
                            gearsLayout[0] = []
                        }
                        gearsLayout[0].push(gearCombination)
        
                        gearCombination= {a:[undefined, a1], b:[undefined,b1]}
                        
                    })
                })
        
            })
        }
        else if(layout == 'layout_1'){
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
        else if(layout == 'layout_2'){
            gearsAvailable.forEach((a1 ,a1i)=>{
                const remainingGears = [...gearsAvailable]
                remainingGears.splice(a1i, 1)
        
                let gearCombination = {a:[undefined ,a1]}
                
                remainingGears.forEach((b0, b0i)=>{
                    remainingGears.splice(b0i, 1)
                    gearCombination["b"] = [b0] 

                    remainingGears.forEach((b1, b1i)=>{
                        remainingGears.splice(b1i, 1)
                        gearCombination["b"].push( b1 ) 
                    
                        remainingGears.forEach((c0, c0i)=>{
                            remainingGears.splice(c0i, 1)
                            gearCombination["c"] = [c0, null]

                            if(!gearsLayout[2]){
                                gearsLayout[2] = []
                            }
                            gearsLayout[2].push(gearCombination)
            
                            gearCombination= {a:[undefined, a1], b:[b0, b1]}
                            
                        })
                    })
                })
            })
        }
        if(layout == 'layout_3'){
            gearsAvailable.forEach((a0 ,a0i)=>{
                const remainingGears = [...gearsAvailable]
                remainingGears.splice(a0i, 1)
        
                let gearCombination = {a:[a0]}
                
                remainingGears.forEach((a1, a1i)=>{
                    remainingGears.splice(a1i, 1)
                    gearCombination["a"].push(a1)

                    remainingGears.forEach((b0, b0i)=>{
                        remainingGears.splice(b0i, 1)
                        gearCombination["b"]=  [b0] 
                    
                        remainingGears.forEach((b1, b1i)=>{
                            remainingGears.splice(b1i, 1)
                            gearCombination["b"].push(b1)
                            remainingGears.forEach((c1, c1i)=>{
                                remainingGears.splice(c1i, 1)
                                gearCombination["c"]=[null, c1]
                                if(!gearsLayout[3]){
                                    gearsLayout[3] = []
                                }
                                gearsLayout[3].push(gearCombination)
                
                                gearCombination= {a:[a0, a1], b:[b0, b1]}

                            })
                            
                        })
                    })
                })
            })
        }

        return gearsLayout
    }
     
    return  gearsLayout
}