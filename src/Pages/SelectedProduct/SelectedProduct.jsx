import React from 'react'
import styles from "./SelectedProduct.module.scss"
import { useParams } from 'react-router-dom'

import products from '../products'

import { AiOutlineColumnHeight as Height, AiOutlineColumnWidth as Width } from 'react-icons/ai'


import layers from './../../Assets/Img/Home/Layers.svg'
import count from './../../Assets/Img/Home/Count.svg'

import { Title } from '../../Components'

const SelectedProduct = () => {

    const { id } = useParams()

    const product = products.find(product => product.id === +id)

    console.log(product);

    return (
        <section className={styles.product}>
            <div className={styles.productImage}>
                <img src={product.img} alt="" />
                {
                    product.type ? <div className={styles.productType}>{product.type}</div> : <></>
                }
            </div>
            <div className={styles.productInfo}>

                <Title>
                    {product.name}
                </Title>

                <div className={styles.productSizes}>
                    {
                        product.category === "napkin"
                            ?
                            <>
                                <div className={styles.productSize}>
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
                            product.sizes.map(({ width: w, height: h }, index) => {
                                return <div className={styles.productSizesElement} key={index}>
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

                </div>

                <p className={styles.text}>
                    {product?.text}
                </p>

            </div>
        </section>
    )
}

export default SelectedProduct
