import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { Row } from '../lib/multipleRows.graphql'
import styles from '../styles/Home.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export const ModalForm: FC = ({}) => {
  const { register, handleSubmit } = useForm<Row>()
  const onSubmit = (data: Row) => console.log(data)

  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <button className={styles.closemodal} onClick={closeModal}>
          &times;
        </button>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Název</label>
            <input {...register('name')} />
            <label>kód</label>
            <input {...register('code')} />
            <label>popis</label>
            <input {...register('description')} />
            <label>počet</label>
            <input {...register('count')} />
            <input type="submit" />
          </form>{' '}
        </div>
      </Modal>
    </div>
  )
}
