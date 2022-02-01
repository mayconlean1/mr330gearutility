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
                let gearCombination = {a:[undefined, a1]}

                const gearsBAvailable = [...gearsAvailable]
                gearsBAvailable.splice(a1i, 1)
        
                gearsBAvailable.forEach((b1, b1i)=>{
                    gearCombination['b'] = [undefined , b1]
                    
                    const gearsCAvailable = [...gearsBAvailable]
                    gearsCAvailable.splice(b1i, 1)
                    
                    gearsCAvailable.forEach((c1, c1i)=>{
                
                        gearCombination["c"] = [null, c1]
                        if(!gearsLayout[0]){
                            gearsLayout[0] = []
                        }
                        gearsLayout[0].push(gearCombination)
        
                        gearCombination= {a:[undefined, a1], b:[undefined,b1]}
                        
                    })
                })
            })
            // console.log('layout 0', gearsLayout[0].length)

        }
        else if(layout == 'layout_1'){
            gearsAvailable.forEach((a0 ,a0i)=>{
                const gearsA1Available = [...gearsAvailable]
                gearsA1Available.splice(a0i, 1)
        
                let gearCombination = {a:[a0]}
        
                gearsA1Available.forEach((a1, a1i)=>{
                    const gearsB0Available = [...gearsA1Available] 
                    gearsB0Available.splice(a1i, 1)
                    gearCombination["a"].push(a1) 
        
                    gearsB0Available.forEach((b0, b0i)=>{
                        const gearsC0Available = [...gearsB0Available]
                        gearsC0Available.splice(b0i, 1)
                        gearCombination["b"] = [b0, undefined] 

                        gearsC0Available.forEach((c0)=>{
        
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
            // console.log('layout 1', gearsLayout[1].length)

        }
        else if(layout == 'layout_2'){
            gearsAvailable.forEach((a1 ,a1i)=>{
                const gearsB0Available = [...gearsAvailable]
                gearsB0Available.splice(a1i, 1)
        
                let gearCombination = {a:[undefined ,a1]}
                
                gearsB0Available.forEach((b0, b0i)=>{
                    const gearsB1Available = [...gearsB0Available]
                    gearsB1Available.splice(b0i, 1)
                    gearCombination["b"] = [b0] 

                    gearsB1Available.forEach((b1, b1i)=>{
                        const gearsC0Available = [...gearsB1Available]
                        gearsC0Available.splice(b1i, 1)
                        gearCombination["b"].push( b1 ) 
                    
                        gearsC0Available.forEach((c0)=>{
                            
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
            // console.log('layout 2', gearsLayout[2].length)

        }
        if(layout == 'layout_3'){
            gearsAvailable.forEach((a0 ,a0i)=>{
                const gearsA1Available = [...gearsAvailable]
                gearsA1Available.splice(a0i, 1)
        
                let gearCombination = {a:[a0]}
                
                gearsA1Available.forEach((a1, a1i)=>{
                    const gearsB0Available = [...gearsA1Available]
                    gearsB0Available.splice(a1i, 1)
                    gearCombination["a"].push(a1)

                    gearsB0Available.forEach((b0, b0i)=>{
                        const gearsB1Available = [...gearsB0Available]
                        gearsB1Available.splice(b0i, 1)
                        gearCombination["b"]=  [b0] 
                    
                        gearsB1Available.forEach((b1, b1i)=>{
                            const gearsC1Available = [...gearsB1Available]
                            gearsC1Available.splice(b1i, 1)
                            gearCombination["b"].push(b1)

                            gearsC1Available.forEach((c1, c1i)=>{
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
            // console.log('layout 3', gearsLayout[3].length)

        }

        return gearsLayout
    }
     
    return  gearsLayout
}