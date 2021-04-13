import React from 'react'
// import {Head} from "./../components/head";
import { MenuButton } from '../components/atomic/MenuButton'
import { Nav } from '../components/atomic/Nav'
import { ModalForm } from '../components/ModalForm'
import styles from '../styles/Home.module.css'

function App() {
  return (
    <div className={styles.site}>
      <Nav></Nav>
      <div className={styles.grid}>
        <MenuButton
          destination="sklad"
          imgLink="/img/icon.png"
          label="Sklad 1"
        />
        <MenuButton
          destination="sklad"
          imgLink="/img/icon.png"
          label="Sklad 2"
        />
        <MenuButton
          destination="sklad"
          imgLink="/img/home.png"
          label="Sklad 3"
        />
        <ModalForm></ModalForm>
      </div>
    </div>
  )
}

export default App
