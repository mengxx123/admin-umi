import moment from 'moment'

export function commonTime(text, item) {
    return <span>
      { moment(text).format('YYYY-MM-DD HH:mm') }
    </span>
}
