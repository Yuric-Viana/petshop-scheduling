const form = document.querySelector('form')
const nameTutor = document.getElementById('name-tutor')
const namePet = document.getElementById('name-pet')
const cellphone = document.getElementById('cellphone')
const descriptionService = document.getElementById('description-service')

form.addEventListener('input', () => {
    let valueNameTutor = nameTutor.value.replace(/\d+/g, '')
    nameTutor.value = valueNameTutor

    let valueNamePet = namePet.value.replace(/\d+/g, '')
    namePet.value = valueNamePet

    let valueCellphone = cellphone.value.replace(/\D+/g, '')
    cellphone.value = valueCellphone

    let valueDescription = descriptionService.value.replace(/\d+/g, '')
    descriptionService.value = valueDescription
})

