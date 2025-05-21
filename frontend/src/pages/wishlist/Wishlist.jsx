import React from 'react'
import style from './Wishlist.module.scss'
import {Helmet} from "react-helmet-async";

const Wishlist = () => {
    return (
       <div className={style.main}>
            <Helmet title="Wishlist" />
       </div>
    )
}

export default Wishlist