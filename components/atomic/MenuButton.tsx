import { FC } from 'react'
import styled from 'styled-components'
import styles from './../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Menu = styled.a`
  display: grid;
  place-items: center;
  grid-template-rows: 70% 30%;
  border-radius: 10px;
  padding-top: 10px;
  background-color: #e77d7d;
`
type MenuButtonProps = {
  label: string
  imgLink: string
  destination: string
}

export const MenuButton: FC<MenuButtonProps> = ({
  label,
  imgLink,
  destination,
}) => {
  return (
    <Link passHref href={destination}>
      <Menu className={styles.MenuBtn}>
        <div className={styles.menuImg}>
          <Image
            layout="fixed"
            width={160}
            height={160}
            className="MenuImg"
            src={imgLink}
          ></Image>
        </div>
        <h2 className={styles.menuLabel}>{label}</h2>
      </Menu>
    </Link>
  )
}
