import React, { useState, ReactElement } from 'react'
import { Button, Modal as Md, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

type ModalProps = {
  readonly message: string
  readonly primaryMessage: string
  readonly secondaryMessage: string
  readonly primaryColor: string
  readonly onClick: (status: boolean) => void
  readonly show: boolean
}

export default function Modal({ message, show, primaryColor, primaryMessage, secondaryMessage, onClick }: ModalProps): ReactElement {
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Md isOpen={show} toggle={() => onClick(false)}>
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color={primaryColor} onClick={() => onClick(true)}>{primaryMessage}</Button>{' '}
          <Button color="secondary" onClick={() => onClick(false)}>{secondaryMessage}</Button>
        </ModalFooter>
      </Md>
    </div>
  )
}