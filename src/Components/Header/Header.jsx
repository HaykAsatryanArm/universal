import React, { useState } from "react"
import styles from "./Header.module.scss"

import { Link } from "react-router-dom"

import logo from "./../../Assets/Img/Header/logo.svg"
import menu from "./../../Assets/Img/Header/menu.svg"

import arm from "./../../Assets/Img/Header/langs/arm.svg"

const Header = ({ active, setActive, burger, setBurger }) => {

    

    const nav = [
        {
            name: "գլխավոր",
            to: "/universal/"
        },
        {
            name: "մեր մասին",
            to: "/universal/about"
        },
        {
            name: "արտադրանք",
            to: "/universal/product"
        },
        {
            name: "ծառայություններ",
            to: "/universal/services"
        },
        {
            name: "գործընկերներ",
            to: "/universal/co-workers"
        },
        {
            name: "հետադարձ կապ",
            to: "/universal/contact"
        },
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <nav className={styles.nav}>
                    <div className={`${styles.burger} ${burger ? styles.active : ''}`} onClick={() => setBurger(!burger)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`${styles.navLinks} ${burger ? styles.active : ''}`}>
                        {
                            nav.map((link, idx) => {
                                return <Link className={`${styles.navLinksLink} ${active === link.name ? styles.active : ""}`} key={idx} to={link.to} onClick={() => {
                                    setActive(link.name)
                                }}>{link.name}</Link>
                            })
                        }
                    </ul>
                    <div className={styles.navLang}>
                        <img src={arm} alt="" />
                        <div className={styles.menu}>
                            <img src={menu} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
