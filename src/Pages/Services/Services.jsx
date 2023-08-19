import React, { useEffect } from "react"
import styles from "./Services.module.scss"

import { Title, Button } from "../../Components"

import medical1 from "./../../Assets/Img/Home/Medical.png"
import medical2 from "./../../Assets/Img/Home/Medical2.png"

const Services = ({ setActive, setFormPopup }) => {
    
    useEffect(() => {
        setActive("ծառայություններ")
    }, [])


    return (
        <>

            <section className={styles.services}>
                <div className="container">
                    <div className={styles.row1}>
                        <div className={styles.servicesContent}>
                            <Title centered={false}>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</Title>
                            <p className={styles.servicesContentText}>
                                Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <Button setPopup={setFormPopup}>
                                պատվիրել զանգ
                            </Button>
                        </div>
                        <div className={styles.servicesImage}>
                            <img src={medical1} alt="" />
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.servicesContent}>
                            <Title centered={false}>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ</Title>
                            <p className={styles.servicesContentText}>
                                Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։ orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Button setPopup={setFormPopup}>
                                պատվիրել զանգ
                            </Button>
                        </div>
                        <div className={styles.servicesImg}>
                            <div className={styles.servicesImage}>
                                <img src={medical2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Services
