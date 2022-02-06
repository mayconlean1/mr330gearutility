function createDataLayouts(data={gearsAvailable:[] ,  latheScrewPitch:2, gearLatheDefault:40}){
    const defaultData = {gearsAvailable:[] ,  latheScrewPitch:2, gearLatheDefault:40, ...data}
    const{gearsAvailable,  latheScrewPitch, gearLatheDefault} = defaultData
    
    const gearsLayout = createGearsLayout(gearsAvailable)
    const gearsDataLayout = {}
   
    for (let indexLayout in gearsLayout){
        const gearLayout = gearsLayout[indexLayout]
        gearLayout.forEach(layout =>{
            if(!gearsDataLayout[indexLayout]){
                gearsDataLayout[indexLayout] = []
            }
            gearsDataLayout[indexLayout].push(createGearsData({gearPosition:layout, latheScrewPitch, gearLatheDefault})) 
        })  
    }

    return gearsDataLayout

}