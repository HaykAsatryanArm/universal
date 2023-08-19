import React, { useEffect } from "react"
import styles from "./CoWorkers.module.scss"

import vagaPharm from "./../../Assets/Img/Home/VagaPharm.png"

import { Title, CoWorker } from "../../Components"


const CoWorkers = ({ setActive }) => {

    useEffect(() => {
        setActive("գործընկերներ")
    }, [])

    const coWorkers = [
        vagaPharm, vagaPharm, vagaPharm, vagaPharm, vagaPharm, vagaPharm
    ]


    return (
        <section className={styles.coWorkers}>
            <div className="container">
                <Title>ԳՈՐԾԸՆԿԵՐՆԵՐ</Title>
                <div className={styles.list}>
                    {
                        coWorkers.map((company, index) => {
                            return <CoWorker company={company} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CoWorkers
