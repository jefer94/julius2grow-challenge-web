import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from './CardImage';

export default function CardTitle({ title }) {
  return (
    <h1 style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '21px'
    }}>
      {title}
    </h1>
  )
}