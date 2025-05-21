import React from 'react'
import style from './Home.module.scss'
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
       <div className={style.main}>
           <Helmet title="Home" />
       </div>
    )
}

export default Home