import { schedulesDay } from "../schedules/load.js"
import { cancelSchedule } from "../services/schedule-cancel.js"
const periods = document.querySelectorAll('.list-period')

periods.forEach((period) => {
    period.addEventListener('click', async (event) => {        
        if(event.target.classList.contains('remove-schedule')) {
            const item = event.target.closest('li')
            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm('Tem certeza que deseja cancelar o agendamento ?')

                if(isConfirm) {
                    await cancelSchedule({ id: String(id)})
                    schedulesDay()
                }
            }
        }
    })
})