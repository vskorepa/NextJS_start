import { FC } from 'react'
import styled from 'styled-components'
import { spacings } from './theme'

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  padding: ${spacings.s};
`

export const Menu: FC = () => {
  return <Wrapper>Menu</Wrapper>
}
