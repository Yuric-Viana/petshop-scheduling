import dayjs from "dayjs"
import { scheduleNew } from "../services/new-schedule.js"
import { schedulesDay } from "../schedules/load.js"
import { hourIsNotValid } from "./event.js"
import { showForm } from "./event.js"
import { dateIsNotValid } from "./event.js"

const form = document.querySelector('form')
const nameTutor = document.getElementById('name-tutor')
const namePet = document.getElementById('name-pet')
const cellphone = document.getElementById('cellphone')
const descriptionService = document.getElementById('description-service')
const selectedDate = document.getElementById('date-schedule')
const selectedHour = document.getElementById('hour')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')
const timeEntry = dayjs(new Date().getTime()).format('HH:mm')

selectedHour.value = timeEntry
selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    try {
        const tutor = nameTutor.value
        if (!tutor) return alert('Insira o nome do tutor!')

        const pet = namePet.value
        if (!namePet) return alert('Insira o nome do pet!')

        const tel = cellphone.value
        if (!cellphone) return alert('Insira o telefone do responsável pelo pet!')
        if (tel.length  <= 10) {
            alert('Número inválido. Insira o número correto!')
            showForm()
            return 
        }

        const description = descriptionService.value
        if (!descriptionService) return alert('Insira o serviço desejado!')

        const valueHour = selectedHour.value
        if (!valueHour) return alert('Insira o horário desejado!')

        const id = String(new Date().getTime())

        const date = selectedDate.value
        if (!date) return alert('Insira a data que deseja fazer a marcação!')
        dateIsNotValid({ date, inputToday })

        const newHour = valueHour.replace(/:(\d{2})$/, ':00');
        const isHourUnavailable = await hourIsNotValid({ data: selectedDate })
        const hourToCheck = isHourUnavailable.some((item) => item.hour == newHour)

        if(hourToCheck == true) {
            alert('Horário indisponível')
            showForm()
            return
        }

        const [hour] = selectedHour.value.split(':')

        const when = dayjs(selectedDate.value).add(hour, 'hour')

        nameTutor.value = ''
        namePet.value = ''
        cellphone.value = ''
        descriptionService.value = ''

        await scheduleNew({
            id,
            nameTutor: tutor,
            namePet: pet,
            cellphone: tel,
            description,
            when
        })

        schedulesDay()
    } catch (error) {
        console.log(error);
        alert('Não foi possível realizar o agendamento.')
    }
})