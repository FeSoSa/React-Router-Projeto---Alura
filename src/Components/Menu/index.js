import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu() {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink path="/" nome="Home"/>
            <MenuLink path="/SobreMim" nome="Sobre Mim"/>
        </nav>
    </header>
  )
}
