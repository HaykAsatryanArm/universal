import React, { useState, useEffect } from "react"

import axios from "axios"
import styles from "./Home.module.scss"

import { Button, Title, Product, CoWorker, Map } from "../../Components"



import headingImg from "./../../Assets/Img/Home/Heading.jpg"
import productImg from "./../../Assets/Img/Home/Product.png"
import medicalImg from "./../../Assets/Img/Home/Medical.png"
import vagaPharm from "./../../Assets/Img/Home/VagaPharm.png"

const Home = ({ setActive, setPopup, setStatus }) => {

    useEffect(() => {
        setActive("գլխավոր")
    }, [])


    const products = [
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)",
            size: {
                width: "7.5սմ",
                height: "7.5սմ",
            },
            layers: "12շերտ",
            count: "10հատ",
            type: "ՍՏԵՐԻԼ"
        },
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)",
            size: {
                width: "7.5սմ",
                height: "7.5սմ",
            },
            layers: "8շերտ",
            count: "10հատ",
        },
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ",
            size: {
                width: "5սմ",
                height: "5սմ",
            },
            layers: "12շերտ",
            count: "100հատ",
        },
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ",
            size: {
                width: "5սմ",
                height: "5սմ",
            },
            layers: "8շերտ",
            count: "100հատ",
        },
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
            size: {
                width: "5սմ",
                height: "5սմ",
            },
            layers: "12շերտ",
            count: "10հատ",
            type: "ՍՏԵՐԻԼ"
        },
        {
            img: productImg,
            name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
            size: {
                width: "5սմ",
                height: "5սմ",
            },
            layers: "8շերտ",
            count: "10հատ",
            type: "ՍՏԵՐԻԼ"
        }
    ]

    const coWorkers = [
        vagaPharm, vagaPharm, vagaPharm, vagaPharm, vagaPharm, vagaPharm
    ]





    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setStatus(true);
            await axios.post(`http://127.0.0.1:8000/submit`, formData);
        } catch (error) {
            setStatus(false);
        }
        setPopup(true);
    }




    return (
        <>
            <section className={styles.heading}>
                <div className="container">
                    <div className={styles.headingContent}>
                        <Title centered={false}>առաջինը հայաստանում</Title>
                        <p className={styles.headingContentText}>
                            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
                        </p>
                        <Button to="/">
                            կարդալ ավելին
                        </Button>
                    </div>
                    <div className={styles.headingImg}>
                        <img src={headingImg} alt="" />
                    </div>
                </div>
            </section>


            <section className={styles.products}>
                <div className="container">
                    <Title centered={true}>արտադրանք</Title>
                    <div className={styles.productsList}>
                        {
                            products.map((product, index) => {
                                return <Product product={product} key={index} />
                            })
                        }
                    </div>
                </div>
                <Button centered={true}>տեսնել ամբողջը</Button>
            </section>


            <section className={styles.medical}>
                <div className="container">
                    <div className={styles.medicalContent}>
                        <Title centered={false}>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</Title>
                        <p className={styles.medicalContentText}>
                            Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում
                        </p>
                        <Button to="/">
                            կարդալ ավելին
                        </Button>
                    </div>
                    <div className={styles.medicalImg}>
                        <img src={medicalImg} alt="" />
                    </div>
                </div>
            </section>


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
                    <Button>
                        ՏԵՍՆԵԼ Ավելին
                    </Button>
                </div>
            </section>


            <section className={styles.contact}>
                <div className="container">
                    <div className={styles.contactInfo}>
                        <p className={styles.contactText}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                        </p>
                        <Map />
                    </div>
                    <div className={styles.contactForms}>
                        <Title>կապնվեք մեզ հետ հիմա</Title>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Անուն" />
                            <input name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="Էլ․ հասցե" />
                            <textarea name="text" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} placeholder="Հաղորդագրություն" />
                            <Button type="button">Ուղարկել</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
