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
    console.log(gears)
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