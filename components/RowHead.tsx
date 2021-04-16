import React, { FC } from 'react'
import styled from 'styled-components'
import { AddRowItem } from './ModalForm'
const RowHeadDiv = styled.div`
  background-color: #e21111;
  display: grid;
  grid-template-columns: 200px auto 100px 140px;
  column-gap: 20px;
  height: 40px;
  padding: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  outline: none;
  text-align: center;
  align-content: center;
  position: fixed;
  width: 85%;
`
const RowHeadCode = styled.p``
const RowHeadCount = styled.p``
export const RowHead: FC = ({}) => {
  return (
    <RowHeadDiv>
      <RowHeadCode>Kód</RowHeadCode>
      <RowHeadCode>Název</RowHeadCode>
      <RowHeadCount>Počet</RowHeadCount>
      <AddRowItem>Přidat</AddRowItem>
    </RowHeadDiv>
  )
}
