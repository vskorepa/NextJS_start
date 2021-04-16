import React from 'react'
import { Nav } from '../components/atomic/Nav'
import { RowList } from './../components/RowList'
import styles from '../styles/Home.module.css'
import { useMultipleRowsQuery } from '../lib/multipleRows.graphql'

const Sklad = () => {
  const { loading, error, data } = useMultipleRowsQuery()
  if (loading)
    return (
      <>
        <Nav></Nav>
      </>
    )
  if (error)
    return (
      <>
        <Nav></Nav>
      </>
    )
  else {
    return (
      <>
        <Nav></Nav>
        <div className={styles.sklad}>
          <header className="Sklad-header"></header>
          <RowList items={data.multipleRows}></RowList>
        </div>
      </>
    )
  }
}

export default Sklad
