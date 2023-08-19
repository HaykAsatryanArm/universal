import React, { useState } from 'react'
import axios from 'axios'
import styles from "./FormPopup.module.scss"

import { RxCross2 as Cross } from "react-icons/rx"

import Button from '../Button/Button'

const FormPopup = ({ setFormPopup, setPopup, setStatus }) => {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",


        service: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://127.0.0.1:8000/submit`, formData);
            setStatus(true);
        } catch (error) {
            setStatus(false);
        }
        setFormPopup(false);
        setPopup(true)
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <div className={styles.close} onClick={() => setFormPopup(false)}>
                    <Cross />
                </div>
                <div className={styles.popupInfo}>
                    <div className={styles.title}>Պատվիրել զանգ</div>
                    <form action={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formInfo}>
                            <input className={styles.field} value={formData.name} onChange={(e) => setFormData(...FormData, e.target.value)} placeholder='Անուն' name="name" type="text" />
                            <input className={styles.field} value={formData.surname} onChange={(e) => setFormData(...FormData, e.target.value)} placeholder='Ազգանուն' name="surname" type="text" />
                        </div>
                        <input className={styles.field} value={formData.phone} onChange={(e) => setFormData(...FormData, e.target.value)} placeholder='Հեռախեսահամար' name="phone" type="text" />
                        <textarea className={`${styles.field} ${styles.textarea}`} value={formData.service} onChange={(e) => setFormData(...FormData, e.target.value)} placeholder='Ծառայության անվանումը' name="service"></textarea>
                        <Button type="button">
                            պատվիրել զանգ
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormPopup
