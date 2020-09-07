import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from './CardImage'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardUser from './CardUser'
import CardDate from './CardDate'
import { ReactElement, useState } from 'react'
import Modal from './Modal'

type CardProps = {
  readonly id: string
  readonly user: string
  readonly date: string
  readonly title: string
  readonly content: string
  readonly image: string
  readonly key?: string
  readonly onRemove?: (id: string) => void
}

export default function Card({ id, user, date, title, content, image, key, onRemove }: CardProps): ReactElement {
  const [show, setShow] = useState(false)

  // function remove() {
  //   onRemove(id)
  // }

  const localDate = new Date(date)

  function onModalClick(status: boolean) {
    if (status) onRemove(id)
    else setShow(false)
  }

  return (
    <div style={{ width: 398 }} key={key}>
      <Modal
        show={show}
        onClick={onModalClick}
        message="Deseas eliminar este elemento"
        primaryColor="danger"
        primaryMessage="Eliminar"
        secondaryMessage="Cancelar"
      />
      <div style={{ height: 48 }}>
        <div style={{ width: 370, display: 'inline-block' }}>
          <CardUser user={user} />
          <CardDate date={`${localDate.toLocaleTimeString()} ${localDate.toLocaleDateString()}`} />
        </div>
        <FontAwesomeIcon className="remove-post" onClick={() => setShow(true)} icon={faTrashAlt} style={{
          width: 18,
          height: 18,
          color: '#FF4C62'
        }}/>
      </div>
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardContent content={content} />
    </div>
  );
}