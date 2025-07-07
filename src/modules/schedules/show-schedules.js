import dayjs from "dayjs"

const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')

export function showSchedules({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ''
        periodAfternoon.innerHTML = ''
        periodNight.innerHTML = ''

        dailySchedules.forEach((schedule) => {
            const li = document.createElement('li')
            li.classList.add('display')
            li.setAttribute('data-id', schedule.id)
            
            const pet = document.createElement('strong')
            pet.textContent = schedule.namePet

            const tutor = document.createElement('span')
            tutor.textContent = ` / ${schedule.nameTutor}`

            const paragraph = document.createElement('p') 
            
            const time = document.createElement('strong')
            time.textContent = dayjs(schedule.when).format('HH:mm')
            time.classList.add('hour-schedule')
            
            const div = document.createElement('div')

            const description = document.createElement('span')
            description.textContent = schedule.description

            const btnRemove = document.createElement('button')
            btnRemove.textContent = 'Remover agendamento'
            btnRemove.classList.add('remove-schedule')

            paragraph.append(pet, tutor)
            
            div.append(time, paragraph)

            li.append(div, description, btnRemove)

            const hour = dayjs(schedule.when).hour()          

            if(hour <= 12) {
                periodMorning.appendChild(li)
            } else if(hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(li)
            } else {
                periodNight.appendChild(li)
            }
            
        });

    } catch (error) {
        console.log(error);
        alert('Não foi possível exibir os agendamentos.')
    }
}
