import { FC } from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Menu = styled.div`
  float: left;
  width: 30%;
  height: 30%;
  max-height: 175px;
  max-width: 175px;
  margin: 1.66%;
  padding-top: 5px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70% 30%;
  border-radius: 10px;
  background-color: #ee4343;
`
type MenuButtonProps = {
  label: string
  imgLink: string
  destination?: string
}

export const MenuButton: FC<MenuButtonProps> = ({
  label,
  imgLink,
  destination,
}) => {
  return (
    <a href={destination}>
      <Menu className={styles.MenuBtn}>
        <div className={styles.menuImg}>
          <Image
            width={75}
            height={75}
            layout="fixed"
            className="MenuImg"
            src={imgLink}
          ></Image>
        </div>
        <h1 className={styles.menuLabel}>{label}</h1>
      </Menu>
    </a>
  )
}
