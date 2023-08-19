import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./Contact.module.scss"

import { Map, Title, Button } from "../../Components"

const Contact = ({ setActive, setStatus, setPopup }) => {

    useEffect(() => {
        setActive("հետադարձ կապ")
    }, [setActive])

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
    )
}

export default Contact
