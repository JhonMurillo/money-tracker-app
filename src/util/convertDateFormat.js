import * as moment from 'moment-timezone'
export default function convert(date, formatIn, formatOut) {
    return moment.tz(date, formatIn, 'UTC').format(formatOut)
}