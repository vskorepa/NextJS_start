import React from 'react'
// import {Head} from "./../components/head";
import { MenuButton } from '../components/atomic/MenuButton'
import { Nav } from '../components/atomic/Nav'
import styles from '../styles/Home.module.css'

function App() {
  return (
    <div className={styles.site}>
      <Nav></Nav>
      <div className={styles.grid}>
        <MenuButton
          destination="sklad"
          imgLink="/img/icon.png"
          label="Papíry HK"
        />
        <MenuButton
          destination="sklad"
          imgLink="/img/icon.png"
          label="Papíry Ji"
        />
        <MenuButton
          destination="sklad"
          imgLink="/img/icon.png"
          label="Papíru Du"
        />
      </div>
    </div>
  )
}

export default App
