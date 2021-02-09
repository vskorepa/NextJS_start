import { FC } from 'react'
import styled from 'styled-components'
import { spacings } from './theme'

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: #f35252;
  color: white;
  padding: ${spacings.xs};
`
type MenuProps = {
  content: string
}

export const Menu: FC<MenuProps> = ({ content }) => {
  return <Wrapper>{content}</Wrapper>
}
