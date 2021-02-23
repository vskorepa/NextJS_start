import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const NavButtonStyled = styled.button`
  width: 100%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: none;
  border: none;
  outline: none;
  border-top: solid white 1px;
  border-bottom: solid white 1px;
  border-radius: 3px;
  :active {
    color: white;
  }
  :hover {
    background-color: grey;
  }
  :visited {
    color: white;
  }
`

type NavButtonProps = {
  content: string
  link: string
}
export const NavButton: FC<NavButtonProps> = ({ content, link }) => {
  return (
    <Link href={link}>
      <NavButtonStyled>{content}</NavButtonStyled>
    </Link>
  )
}
