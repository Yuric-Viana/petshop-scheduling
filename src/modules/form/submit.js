import dayjs from "dayjs"

const selectedDate = document.getElementById('date-schedule')
const selectedHour = document.getElementById('hour')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')
const timeEntry = dayjs(new Date().getTime()).format('HH:mm')

selectedHour.value = timeEntry
selectedDate.value = inputToday
selectedDate.min = inputToday