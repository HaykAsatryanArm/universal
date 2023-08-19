import React from 'react'
import styles from "./Button.module.scss"

import { Link } from 'react-router-dom'

const Button = ({ type, to, children: text, setPopup, setSelected, product }) => {
    return type === "button" ?
        <button className={styles.button} type="submit">
            {text}
        </button>
        :
        setPopup
            ?
            <button type="submit" className={styles.button} onClick={() => setPopup(true)}>
                {text}
            </button>
            :
            setSelected
                ?
                <button type="submit" className={styles.button} onClick={() => setSelected(product)}>
                    {text}
                </button>
                :
                <Link className={styles.button} to={`/universal${to}`}>
                    {text}
                </Link>




}

export default Button
