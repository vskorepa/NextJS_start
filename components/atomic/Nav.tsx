import React, { FC } from 'react'
import styled from 'styled-components'
import { useViewerQuery } from '../../lib/viewer.graphql'
import styles from './../../styles/Home.module.css'
import Image from 'next/image'
import { NavButton } from './NavButon'
import Link from 'next/link'

const SideNav = styled.div`
  height: 100%;
  width: 15%;
  position: absolute;
  background-color: #282c34;
  padding: 5px;
  overflow: none;
`

export const Nav: FC = ({}) => {
  const { data, loading, error } = useViewerQuery()

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            layout="fixed"
            width={30}
            height={30}
            className={styles.homeimg}
            src="/img/home.png"
          ></Image>
        </Link>

        {loading && <>Loading....</>}
        {error && <>Error</>}
        {data && (
          <Link href="/">
            <p>({data.viewer.name}) odhlásit se</p>
          </Link>
        )}
      </nav>
      <SideNav>
        <NavButton link="/" content="SKLADY"></NavButton>
      </SideNav>
    </>
  )
}
