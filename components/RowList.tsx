import React, { FC, useState } from 'react'
import { Row } from './types'
import { Row as RowComponent } from './Row'
import { AddRowItem } from './AddRow'
import { RowHead } from './RowHead'
import {
  useAddSingleRowMutation,
  useDeleteSingleRowMutation,
} from '../__generated__/lib/singleRow.graphql'
import { useMultipleRowsQuery } from '../lib/multipleRows.graphql'

type rowListProps = {
  items: Row[]
}
export const RowList: FC<rowListProps> = ({ items: initItems }) => {
  const [addRow] = useAddSingleRowMutation()
  const [deleteRow] = useDeleteSingleRowMutation()
  const [items, setItems] = useState(initItems)
  const [nextId, setNextId] = useState(items.length + 1)

  const addItem = (item: Row) => {
    addRow({
      variables: {
        id: item.id,
        name: item.name,
        code: item.code,
        description: item.description,
        count: item.count,
      },
    })
    setItems([...items, item])
  }
  const deleteItem = (id: number) => {
    deleteRow({
      variables: {
        id: id,
      },
    })
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
