import React from 'react'
import style from './Admin.module.scss'
import {Helmet} from "react-helmet-async";

const Admin = () => {
    return (
       <div className={style.main}>
           <Helmet title="Admin" />
       </div>
    )
}

export default Admin