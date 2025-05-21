import React from 'react'
import style from './Basket.module.scss'
import {Helmet} from "react-helmet-async";

const Basket = () => {
    return (
       <div className={style.main}>
            <Helmet title="Basket" />
       </div>
    )
}

export default Basket