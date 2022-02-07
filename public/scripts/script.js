let gearsAvailable = []
createGearsArray()
const gearsApp = initGearsApp({gearsAvailable})

function addGear(){
    
    const inputValue = document.querySelector('#inputAddGear').value

    const newOption = document.createElement('option')
    newOption.value = inputValue
    newOption.textContent = inputValue

    const select = document.querySelector('#select_gearsAvaliable')
    select.appendChild(newOption)

    createGearsArray()
    gearsApp.setAvailable(gearsAvailable)
}

function removeGear(){
    const select = document.querySelector('#select_gearsAvaliable')
    select.remove(select.selectedIndex)

    createGearsArray()
    gearsApp.setAvailable(gearsAvailable)
}

function changeLatheScrewPitch(self){
    gearsApp.setLatheScrewPitch (Number( self.value))
}

function changeFirstGear (self){
    gearsApp.setGearLatheDefault(Number( self.value))
}

function changeTargetPitch(self){
    gearsApp.setTargetPitch(Number(self.value))
}

function changeToleranceLimit(self){
    gearsApp.setToleranceLimit(Number (self.value))
}

function search(){   
    const gears = gearsApp.searchBestCombinations()

    createDivLayouts()
    function createDivLayouts(){
        const divLayouts = document.querySelector('.layouts')
        divLayouts.innerHTML = ''

        let layoutPosition = 0
        for(let indexLayout in gears){
            const layout = gears[indexLayout]
            console.log(layout.length)

            divLayouts.innerHTML += `
            <div class="layout l${layoutPosition}">
            <div class="layoutDescription" onclick="expandCollapseWindow('l${layoutPosition}window')" onmouseover="showGenericSchema('${indexLayout}')">
                <div class="layoutDescription-left">
                    Layout ${layoutPosition} (<span>${layout.length}</span>  combinações)
                </div>
                <div class="layoutDescription-right">
                    <img id="l${layoutPosition}window_icon" src="/svg/expand_more_black_24dp.svg" alt="expandSVG">
                </div>
            </div>
            <div class="layoutCombinations" id="l${layoutPosition}window">
                ${createDivGearcombination(layout, indexLayout)}
            </div>
        </div>
            `

            layoutPosition ++
        }

        function createDivGearcombination(layout, indexLayout){
            let divLayoutcombination= ''
            layout.forEach(gearData =>{
                const strMounting = JSON.stringify( gearData.mounting)
                divLayoutcombination +=  `
                <div class="layoutCombination" onclick="showSchema(this, '${indexLayout}')">
                    <span> ${strMounting} </span> <span>passo: ${gearData.step} mm</span>
                </div>
                `
            })
            return divLayoutcombination
        }

    }
}

function createGearsArray(){
    const select = document.querySelector('#select_gearsAvaliable')
    const selectGearsAvailable = select.options
    gearsAvailable = []

    for (let index in selectGearsAvailable){
        const gear = selectGearsAvailable[index]

        if (gear.value){
            gearsAvailable.push(gear.value)
        }
    }
}

function expandCollapseWindow(id){
    const window = document.getElementById(id)
    const img_icon= document.getElementById(id+'_icon')
    if(window.clientHeight == 0){
        window.style.height = 'auto'
        window.style.overflow = 'auto'
        img_icon.src = '/svg/expand_less_black_24dp.svg'
    }else{
        img_icon.src = '/svg/expand_more_black_24dp.svg'
        window.style.height = '0px'
        window.style.overflow = 'hidden'
    }
}

function showSchema(self, indexLayout){
    console.log(self.children[0], indexLayout)
}

function showGenericSchema (indexLayout){
    console.log('generic schema', indexLayout)
}