import React from 'react'
import styles from './Product.module.scss'

import { Link } from 'react-router-dom'

import { AiOutlineColumnHeight as Height, AiOutlineColumnWidth as Width } from 'react-icons/ai'


import layers from './../../Assets/Img/Home/Layers.svg'
import count from './../../Assets/Img/Home/Count.svg'

const Product = ({ setSelected, product, onlySizes }) => {

    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={product.img} alt="" />
                {
                    product.type ? <div className={styles.productType}>{product.type}</div> : <></>
                }
            </div>
            <div className={styles.productName}>
                {product.name}
            </div>
            <div className={styles.productInfo}>

                {
                    !onlySizes
                        ?
                        <>
                            <div className={styles.productSizes}>
                                <div className={styles.productHeight}>
                                    <Height />
                                    {product.size.height}
                                </div>
                                <div className={styles.productWidth}>
                                    <Width />
                                    {product.size.width}
                                </div>
                            </div>
                            <div className={styles.productLayers}>
                                <img src={layers} alt="" />
                                {product.layers}
                            </div>
                            <div className={styles.productCount}>
                                <img src={count} alt="" />
                                {product.count}
                            </div>
                        </>
                        :
                        <>
                            {
                                product.sizes.map(({ width: w, height: h }, index) => {
                                    return <div className={styles.productSizes} key={index}>
                                        <div className={styles.productHeight}>
                                            <Height />
                                            {h}
                                        </div>
                                        <div className={styles.productWidth}>
                                            <Width />
                                            {w}
                                        </div>
                                    </div>
                                })
                            }
                        </>

                }

            </div>
            <Link to={`/product/${product.id}`} className={styles.button}>
                ՏԵՍՆԵԼ Ավելին
            </Link>
        </div>
    )
}

export default Product
