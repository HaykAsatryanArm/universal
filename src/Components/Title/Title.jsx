import React from 'react'
import styles from './Title.module.scss'

const Title = ({ centered, children:title }) => {
    return (
        <h2 style={{ textAlign: `${centered ? "center" : "none"}` }} className={styles.title}>{title}</h2>
    )
}

export default Title
