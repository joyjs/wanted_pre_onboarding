import React, { useState } from 'react'
import Modal from './Modal'

function ModalButton() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <section className="ModalButton">
      <h1 className="visually-hidden">Modal</h1>

      <button className="modal-button" onClick={openModal}>
        Open Modal
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}

export default ModalButton
