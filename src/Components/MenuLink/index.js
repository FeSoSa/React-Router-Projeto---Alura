import styles from './MenuLink.module.css';

import React from 'react'
import {NavLink} from 'react-router-dom';

export default function MenuLink(props) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={props.path}
            end
        >
            {props.nome}

        </NavLink>
    )
}
