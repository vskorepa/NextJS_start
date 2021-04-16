import React from 'react'
import { Nav } from '../components/atomic/Nav'
import { RowList } from './../components/RowList'
import styles from '../styles/Home.module.css'

const Sklad = () => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.sklad}>
        <RowList></RowList>
      </div>
    </>
  )
}

export default Sklad
