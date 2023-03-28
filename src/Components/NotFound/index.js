import styles from './NotFound.module.css'
import React from 'react'
import erro404 from 'assets/erro_404.png'
import Button from 'Components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navegar = useNavigate()

  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
            <p className={styles.paragrafo}>Tem certeza que era essa página que estava procurando?</p>

            <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                <Button tamanho={'lg'}>Voltar</Button>
            </div>
            <img className={styles.imagemCachorro} src={erro404} alt="Cachorro de TI"/>

        </div>
        <div className={styles.espacoEmBranco}></div>
    </>
  )
}
