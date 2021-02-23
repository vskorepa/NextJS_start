import React, { FC, useState } from 'react'
import { Row } from './types'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const RowHeadDiv = styled.div`
  background-color: #e21111;
  display: grid;
  grid-template-columns: 200px auto 50px 50px 70px;
  column-gap: 20px;
  height: 40px;
  padding: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  outline: none;
  text-align: center;
  align-content: center;
  position: relative;
`
const RowHeadCode = styled.p``
const RowHeadCount = styled.p``

export const RowHead: FC = ({}) => {
  return (
    <RowHeadDiv>
      <RowHeadCode>Kód</RowHeadCode>
      <RowHeadCode>Název</RowHeadCode>
      <RowHeadCount>Počet</RowHeadCount>
    </RowHeadDiv>
  )
}
