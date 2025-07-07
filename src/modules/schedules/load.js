import { showSchedules } from "../schedules/show-schedules.js"
import { scheduleFetchByDay } from "../services/schedules-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({ date })

    showSchedules({ dailySchedules })

    hoursLoad({ date, dailySchedules })
    
}