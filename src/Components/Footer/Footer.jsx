import React from 'react'
import styles from "./Footer.module.scss"

import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs"
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"


import logo from './../../Assets/Img/Header/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {

    const products = [
        "հեղուկներ", "քսուքներ", "յուղեր", "ոգեթուրմեր", "փոշիներ", "մաշկի խնամքի միջոցներ"
    ]

    const contacts = [
        {
            Icon: BsFillTelephoneFill,
            text: "Զանգահարեք մեզ: +374 90 000 000"
        },
        {
            Icon: AiOutlineMail,
            text: "Էլ հասցե: @mail.ru"
        },
        {
            Icon: BsGeoAltFill,
            text: "Երևան"
        }
    ]

    const social = [
        {
            Icon: FaInstagram,
            link: "https://www.instagram.com/",
        },
        {
            Icon: FaTwitterSquare,
            link: "https://twitter.com/?lang=ru",
        },
        {
            Icon: FaFacebookSquare,
            link: "https://www.facebook.com/",
        }
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <ul className={styles.products}>
                        <div className={styles.name}>ԱՐՏԱԴՐԱՆՔ</div>
                        {
                            products.map((product, index) => {
                                return <li className={styles.product} key={index}>{product}</li>
                            })
                        }
                    </ul>
                    <ul className={styles.contacts}>
                        <div className={styles.name}>ԿԱՊ ՄԵԶ ՀԵՏ</div>
                        {
                            contacts.map(({ Icon, text }, index) => {
                                return <li className={styles.contact} key={index}>
                                    <Icon /> {text}
                                </li>
                            })
                        }
                    </ul>
                    <ul className={styles.socials}>
                        <div className={styles.name}>ՓՆՏՐԵՔ ՄԵԶ։</div>
                        <div className={styles.socialsList}>
                            {
                                social.map(({ Icon, link }, index) => {
                                    return <li className={styles.social} key={index}>
                                        <Link to={link}>
                                            <Icon />
                                        </Link>
                                    </li>
                                })
                            }
                        </div>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են
            </div>
        </footer>
    )
}

export default Footer
