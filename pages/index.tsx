import React from 'react'
// import {Head} from "./../components/head";
import { MenuButton } from './../components/menuButton'
import styles from '../styles/Home.module.css'
import { useViewerQuery } from '../lib/viewer.graphql'

function App() {
  const { data, loading, error } = useViewerQuery()

  return (
    <>
      <div className={styles.nav}>
        {loading && <>Loading....</>}
        {error && <>Error</>}
        {data && <p></p>}
      </div>
      <div className={styles.container}>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 1"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 2"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 3"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 4"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 5"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 6"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 7"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 8"></MenuButton>
        <MenuButton imgLink="/img/icon.png" label="SKLAD 9"></MenuButton>
      </div>
    </>
  )
}

export default App
