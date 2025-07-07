import dayjs from 'dayjs'
import { openingHours } from '../utils/opening-hours.js'

export function hoursLoad({ date, dailySchedules }) {

    const unavailableHours = dailySchedules.map((hour) => {
        const isNotAvailable = dayjs(hour.when).format('HH:mm')
        return isNotAvailable
    })

    const opening = openingHours.map((hour) => {
        const [schedule] = hour.split(':')

        const isHourPast = dayjs(date).add(schedule, 'hour').isBefore(dayjs())

        const availableHours = !unavailableHours.includes(hour) && !isHourPast
               
        return {
            hour,
            availableHours
        }

    })

    return opening
}

