import React, { useState } from 'react'
import Modal from './Modal'

function ModalButton() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <section className="ModalButton">
      <h1 className="title">Modal</h1>

      <div className="modal-button-wrapper">
        <button className="modal-button" onClick={openModal}>
          Open Modal
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}

export default ModalButton
