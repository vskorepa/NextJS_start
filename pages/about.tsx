import Link from 'next/link'
import React from 'react'
import { Menu } from '../components/menu'
import { MenuButton } from '../components/menuButton'

export default function About() {
  return (
    <div>
      <Menu content=""></Menu>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </div>
  )
}
