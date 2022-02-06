let gearsAvailable = []

function addGear(){
    
    const inputValue = document.querySelector('#inputAddGear').value

    const newOption = document.createElement('option')
    newOption.value = inputValue
    newOption.textContent = inputValue

    const select = document.querySelector('#select_gearsAvaliable')
    console.log('add', select)
    select.appendChild(newOption)
}

function removeGear(){
    const select = document.querySelector('#select_gearsAvaliable')
    select.remove(select.selectedIndex)

}

function search(){
    
    createGearsArray()

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

}