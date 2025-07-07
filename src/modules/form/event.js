import { scheduleFetchByDay } from "../services/schedules-fetch-by-day.js"
import { hoursLoad } from "./hours-load.js"

const btnNewSchedule = document.querySelector('.new-schedule button')
const submit = document.getElementById('submit-schedule')
const front = document.getElementById('front')
const overlay = document.querySelector('.overlay')
const inputs = document.querySelectorAll('.input-form')
const nameTutor = document.getElementById('name-tutor')
const namePet = document.getElementById('name-pet')
const cellphone = document.getElementById('cellphone')
const descriptionService = document.getElementById('description-service')
const timeInput = document.getElementById('hour');
let hour = document.getElementById('hour')

let allFilled = false
function isFilled() {
    let tutor = nameTutor.value
    let pet = namePet.value
    let valueCellphone = cellphone.value
    let description = descriptionService.value

    if (tutor == '' || pet == '' || valueCellphone == '' || description == '') {
        allFilled = false
    } else {
        allFilled = true
    }

    return allFilled
}

let isValid = false
function isValidTrue() {

    if (!hour.checkValidity()) {
        isValid = false
    } else {
        isValid = true
    }

    return isValid
}

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        isFilled()
    })
})

export async function hourIsNotValid({ data }) {
    const dateValue = data.value

    const dailySchedules = await scheduleFetchByDay({ date: dateValue })
    const available = hoursLoad({ date: dateValue, dailySchedules })

    const isNotValid = available.filter((item) => item.availableHours === false)

    return isNotValid
}

hour.oninput = async () => {
    isValidTrue()
}

submit.onclick = async () => {
    isFilled()
    isValidTrue()

    if (isValid === true && allFilled === true) {
        overlay.style.display = 'none'
        front.style.display = 'none'
    }
}

export function showForm() {
    overlay.style.display = 'block'
    front.style.display = 'block'
}

btnNewSchedule.onclick = () => {
    showForm()
}

timeInput.addEventListener('input', () => {
    const [hour] = timeInput.value.split(':');
    timeInput.value = `${hour.padStart(2, '0')}:00`;
});

export function dateIsNotValid({ date, inputToday }) {
    if(date != inputToday) {
        return
    }
}