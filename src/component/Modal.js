import React, { useRef } from 'react'

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  return showModal ? (
    <aside className="modal-background" onClick={closeModal} ref={modalRef}>
      <div className="modal-wrapper" showModal={showModal}>
        <button
          className="close-btn"
          aria-label="Close modal"
          onClick={() => setShowModal((prev) => !prev)}
        >
          x
        </button>
        <h1 className="title">Hello CodeState!</h1>
      </div>
    </aside>
  ) : null
}

export default Modal
