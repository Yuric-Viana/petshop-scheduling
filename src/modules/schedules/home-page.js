import dayjs from "dayjs"
import { schedulesDay } from "./load.js"

const date = document.getElementById('date')

const todayDate = dayjs(new Date()).format('YYYY-MM-DD')

date.value = todayDate
date.min = todayDate

date.onchange = () => schedulesDay()