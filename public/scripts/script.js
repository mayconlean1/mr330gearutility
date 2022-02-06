let gearsAvailable = []

const form = document.querySelector('form')
form.addEventListener('submit', event=>{
    event.preventDefault()
})

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
    createGearsAvaliableInput()
    form.submit()

    function createGearsAvaliableInput(){
        const newInput= document.createElement('input')
        newInput.type = 'text'
        newInput.value = gearsAvailable.join(';')
        newInput.hidden = true
        newInput.name = 'gearsAvailable'
    
        const main = document.querySelector('main')
        main.appendChild(newInput)

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

}