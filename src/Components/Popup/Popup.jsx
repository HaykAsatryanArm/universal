import React from 'react'
import styles from "./Popup.module.scss"

import { BsCheckLg as Check } from "react-icons/bs"
import { RxCross2 as Cross } from "react-icons/rx"

const Popup = (...args) => {
    const { text, setPopup, status } = args[0]

    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <div className={styles.close} onClick={() => setPopup(false)}>
                    <Cross />
                </div>
                <div className={styles.popupInfo}>
                    <div className={styles.title} style={{ color: status ? "#12724F" : "#f22b29" }}>{status ? "ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ" : "ԽԱՓԱՆՈՒՄ"}</div>
                    <div className={styles.text}>{status ? text : "ԱՌԱՋԱՑԱՎ ԽՆԴԻՐ, ԽՆԴՐՈՒՄ ԵՆՔ ՓՈՐՁԵԼ ՄԻ ՔԻՉ ՈՒՇ"}</div>
                    <div className={styles.icon}>

                        <div className={styles.sign}>
                            {status ? <Check className={styles} style={{ color: status ? "#12724F" : "#f22b29" }} /> : <Cross className={styles} style={{ color: status ? "#12724F" : "#f22b29" }} />}
                        </div>

                        <svg className={styles.circle} width="222" height="222" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M83.2664 3.52047C108.511 -2.99354 135.243 -0.413633 158.776 10.8079C182.309 22.0295 201.141 41.1765 211.971 64.8923C222.8 88.6081 224.937 115.379 218.005 140.512C211.073 165.645 195.516 187.537 174.06 202.348C152.604 217.159 126.62 223.946 100.661 221.517C74.7033 219.089 50.4282 207.601 32.0919 189.067C13.7556 170.534 2.52821 146.137 0.37811 120.154C-1.77199 94.1714 5.29238 68.261 20.3328 46.9652L32.2123 55.3553C19.1425 73.8608 13.0038 96.3764 14.8722 118.955C16.7405 141.533 26.4969 162.733 42.4307 178.839C58.3645 194.944 79.459 204.927 102.016 207.037C124.573 209.147 147.153 203.25 165.798 190.379C184.442 177.508 197.961 158.486 203.985 136.646C210.008 114.805 208.152 91.542 198.741 70.9335C189.33 50.325 172.966 33.6867 152.516 23.9354C132.067 14.1842 108.837 11.9423 86.9002 17.6028L83.2664 3.52047Z"
                                fill="url(#paint0_linear_65_1329)" />
                            <defs>
                                <linearGradient id="paint0_linear_65_1329" x1="181" y1="32" x2="-46.5" y2="177"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor={status ? "#12724F" : "#f22b29"} />
                                    <stop offset="1" stopColor={status ? "#009962" : "#f35653"} stopOpacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
