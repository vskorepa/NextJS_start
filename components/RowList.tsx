import React, { FC } from 'react'
import { Row as RowComponent } from './Row'
import { RowHead } from './RowHead'
import { useDeleteSingleRowMutation } from '../__generated__/lib/singleRow.graphql'
import { MultipleRowsDocument } from '../lib/multipleRows.graphql'
import styles from '../styles/Home.module.css'
import { useMultipleRowsQuery } from '../lib/multipleRows.graphql'
import { Nav } from './atomic/Nav'

export const RowList: FC = ({}) => {
  // const [addRow] = useAddSingleRowMutation()
  const [deleteRow] = useDeleteSingleRowMutation()

  const { loading, error, data } = useMultipleRowsQuery()
  // const [items, setItems] = useState(data.multipleRows)
  // const addItem = async (item: Row) => {
  //   // setItems([...items, item])
  //   await addRow({
  //     variables: {
  //       id: item.id,
  //       name: item.name,
  //       code: item.code,
  //       description: item.description,
  //       count: item.count,
  //     },
  //     refetchQueries: [{ query: MultipleRowsDocument }],
  //   })
  // }
  const deleteItem = async (id: number) => {
    // setItems(items.filter((x) => !!x).filter((x) => x.id !== id))
    await deleteRow({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: MultipleRowsDocument }],
    })
  }
  if (loading) {
    return <Nav></Nav>
  }
  if (error) {
    return <Nav></Nav>
  } else {
    return (
      <div className={styles.main}>
        <RowHead></RowHead>

        <div className={styles.rowlist}>
          {data.multipleRows
            .filter((x) => !!x)
            .map((item) => (
              <RowComponent key={item.id} {...item} deleteItem={deleteItem} />
            ))}
        </div>
      </div>
    )
  }
}
