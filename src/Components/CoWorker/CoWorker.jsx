import React from 'react'
import styles from './CoWorker.module.scss'

const CoWorker = ({company}) => {
    return (
        <div className={styles.coWorker}>
            <img src={company} alt="" />
        </div>
    )
}

export default CoWorker
