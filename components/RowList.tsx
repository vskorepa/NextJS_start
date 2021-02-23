import React, { FC, useState } from 'react'
import { Row } from './types'
import { Row as RowComponent } from './Row'
import { AddRowItem } from './AddRow'
import { RowHead } from './RowHead'

type rowListProps = {
  items: Row[]
}

export const RowList: FC<rowListProps> = ({ items: initItems }) => {
  const [items, setItems] = useState(initItems)
  const [nextId, setNextId] = useState(items.length + 1)

  const addItem = (item: Row) => {
    setItems([...items, item])
  }
  const deleteItem = (id: number) => {
    setItems(items.filter((x) => x.id !== id))
  }
  const getNewId = () => {
    setNextId(nextId + 1)
    return nextId - 1
  }

  return (
    <div>
      <RowHead></RowHead>
      <AddRowItem addItem={addItem} getNewId={getNewId} />

      <div className="rowList">
        {items.map((item) => (
          <RowComponent key={item.id} {...item} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  )
}
