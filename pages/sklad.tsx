import React from 'react'
import { Nav } from '../components/atomic/Nav'
import { RowList } from './../components/RowList'
import { Row } from './../components/types'
import styles from '../styles/Home.module.css'

const fakeData: Array<Row> = [
  {
    id: 0,
    code: 'TPRdafsd78PT',
    count: '7',
    description: 'Black toner do WC7545',
    name: 'Černý toner',
  },
  { id: 1, code: 'TZD48sad7BL', count: '2', name: 'Modrý toner' },
]

function Sklad() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.sklad}>
        <header className="Sklad-header"></header>
        <RowList items={fakeData}></RowList>
      </div>
    </>
  )
}

export default Sklad
