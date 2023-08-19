import React, { useState, useEffect } from "react"
import styles from "./Products.module.scss"

import { Title, Product } from "../../Components"

import products from "../products"


const Products = ({ setActive }) => {

    useEffect(() => {
        setActive("արտադրանք")
    }, [])

    const [selected, setSelected] = useState(null)

    const [category, setCategory] = useState("bint")

    const categories = [
        {
            name: "ԲԻՆՏԵՐ",
            category: "bint"
        },
        {
            name: "ԹԱՆԶԻՖՆԵՐ",
            category: "tanziff"
        },
        {
            name: "ԱՆՁԵՌՈՑԻԿՆԵՐ",
            category: "napkin"
        },
        {
            name: "ԹՈՓԵՐ",
            category: "roll"
        }
    ]


    return (
        <section className={styles.products}>
            <div className="container">
                <Title centered={true}>արտադրանք</Title>
                <div className={styles.categories}>
                    {
                        categories.map(({name, category:cat}, index) => {
                            return <div className={`${styles.category} ${cat === category ? styles.active : ""}`} onClick={() => setCategory(cat)} key={index} >{name}</div>
                        })
                    }
                </div>
                <div className={styles.productsList}>
                    {
                        products.map((product, index) => {
                            return category === product.category ? <Product setSelected={setSelected} onlySizes={product.category !== "napkin"} product={product} key={index} /> : ''
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default Products
