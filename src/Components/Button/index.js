import React from 'react'
import styles from './Button.module.css'

export default function Button({children,tamanho}) {
  return (
    <button className={`${styles.botaoLer} ${styles[tamanho]}`}>{children}</button>
  )
}
