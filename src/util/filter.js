import moment from 'moment'

export function commonTime() {
    return (text, item) => (
        <span>
          { moment(text).format('YYYY-MM-DD HH:mm') }
        </span>
      )
}