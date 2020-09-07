import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardContent from './CardContent';

export default function CardUser({ user }) {
  return (
    <span style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: '48px'
    }}>
      {user}
    </span>
  )
}