import dayjs from 'dayjs'

export function getTime(format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs().format(format)
}
