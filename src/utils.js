import moment from 'moment'

export const formatDuration = (milliseconds) =>
  moment.utc(milliseconds).format('m:ss')
export const formatDate = (date) => moment.utc(date).format('DD-MM-YYYY')
