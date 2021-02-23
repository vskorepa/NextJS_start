import React, { FC } from 'react'
import styled from 'styled-components'
import { Row as RowType } from './types'
import styles from '../styles/Home.module.css'

const RowDiv = styled.div`
  background-color: #ff00008e;
  display: grid;
  grid-template-columns: 200px auto 50px 50px 70px;
  column-gap: 20px;
  padding: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  outline: none;
  :nth-child(even) {
    background-color: #e21111;
    display: grid;
    grid-template-columns: 200px auto 50px 50px 70px;
    column-gap: 20px;
    padding: 10px;
    font-size: calc(10px + 2vmin);
    color: white;
    outline: none;
  }
`

type RowProps = RowType & {
  deleteItem: (id: number) => void
}

export const Row: FC<RowProps> = ({
  id,
  code,
  description,
  count,
  name,
  deleteItem,
}) => {
  return (
    <RowDiv>
      <div className={styles.RowCode}>{code}</div>
      <div className={styles.RowCode}>{name}</div>
      <div className={styles.RowCode}>{count}</div>
      <button className={styles.btn}>Edit</button>
      <button className={styles.btn} onClick={() => deleteItem(id)}>
        smazat
      </button>
    </RowDiv>
  )
}
