import moment from 'moment'
import styles from './index.scss'
console.log('styles', styles)

export function commonTime(text, item) {
    return <span>
      { moment(text).format('YYYY-MM-DD HH:mm') }
    </span>
}

export function oneRow(text, item) {
    return <span className={styles.tableCeil}>{ text }</span>
}

