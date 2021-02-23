import React, { FC, useState } from 'react'
import { Row } from './types'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const AddRow = styled.div`
  background-color: #e21111;
  display: grid;
  grid-template-columns: 200px auto 50px 140px;
  column-gap: 20px;
  padding: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  outline: none;
`

type AddRowItemProps = {
  addItem: (item: Row) => void
  getNewId: () => number
}

export const AddRowItem: FC<AddRowItemProps> = ({ addItem, getNewId }) => {
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const [count, setCount] = useState('')
  const [name, setName] = useState('')
  const handlerAddItem = () => {
    const newRow: Row = {
      id: getNewId(),
      code,
      description,
      count,
      name,
    }
    addItem(newRow)
  }

  return (
    <AddRow className={styles.AddRow}>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <input
        type="number"
        min="1"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <button onClick={handlerAddItem} className={styles.btn}>
        Přidat
      </button>
    </AddRow>
  )
}
