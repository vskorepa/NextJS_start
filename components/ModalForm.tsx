import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { Row } from '../lib/multipleRows.graphql'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { useAddSingleRowMutation } from '../__generated__/lib/singleRow.graphql'
import { MultipleRowsDocument } from '../lib/multipleRows.graphql'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '75vh',
    width: '75vw',
    background: '#f85555',
    border: 'none',
    outline: 'none',
  },
}
const AddButton = styled.button`
  background: white;
  border: none;
  outline: none;
  color: #ff0000;
  font-size: 16px;
  border-radius: 50rem;
  box-shadow: 0rem 0.2rem rgba(0, 0, 0, 0.1);
  justify-self: center;
  align-self: center;
  width: -webkit-fill-available;
`
const HeadDiv = styled.div`
  justify-self: center;
  align-self: center;
  width: -webkit-fill-available;
`

// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export const AddRowItem: FC = ({}) => {
  const { register, handleSubmit } = useForm<Row>()
  const onSubmit = (data: Row) => handlerAddItem(data)
  const [addRow] = useAddSingleRowMutation()

  const addItem = async (item: Row) => {
    // setItems([...items, item])
    await addRow({
      variables: {
        id: item.id,
        name: item.name,
        code: item.code,
        description: item.description,
        count: item.count,
      },
      refetchQueries: [{ query: MultipleRowsDocument }],
    })
  }

  const handlerAddItem = (data: Row) => {
    const newRow: Row = {
      id: getNewId,
      code: data.code,
      description: data.description,
      count: data.count,
      name: data.name,
    }
    console.log(newRow)
    addItem(newRow)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const afterOpenModal = () => {}
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <HeadDiv>
      <AddButton onClick={openModal}>přidat</AddButton>
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
            <input hidden {...register('id')} value="" />
            <input type="submit" />
          </form>{' '}
        </div>
      </Modal>
    </HeadDiv>
  )
}
