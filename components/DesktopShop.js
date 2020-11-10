import data from "../data/items.json"
import Link from 'next/link'
import styles from "../styles/Shop.module.scss"
import styles2 from '../styles/Button.module.sass'
import { useState, useEffect } from "react"

export default function DesktopShop(props){

    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <h2>Rhey's Art</h2>
                <Link href="/">
                <a className={styles2.a}>Home</a>
                </Link>
            </div>
            <div className={styles.head}>
            {this.props.display}
            </div>

            <div className={styles.privacy}>
            <Link href="/privacy">
                <a>Privacy</a>
            </Link> 
            </div>

          <div className={styles.terms}>
            <Link href="/terms">
                <a>Terms</a>
            </Link> 
          </div>

          <div className={styles.about}>
            <Link href="/about">
                <a>About</a>
            </Link> 
          </div>

            <div className={styles.footer}></div>

            
        </div>
    )
}