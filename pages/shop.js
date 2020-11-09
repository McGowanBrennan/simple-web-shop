import data from "../data/items.json"
import Link from 'next/link'
import styles from "../styles/Shop.module.scss"
import styles2 from '../styles/Button.module.sass'
import { useState, useEffect } from "react"

export default function Shop() {
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        let itemsList = []
        data.map((product)=>{
            console.log(product)
            let path = "/"
            path = path + product.page
            itemsList.push(
                <div className={styles.list}>
                    <img src={product.filename} width={product.width} height={product.height}/>
                    <h3>{product.title}</h3>
                    <h4>{product.description}</h4>
                    <Link href={path}>
                    <a className={styles2.a}>{product.price}</a>
                    </Link>
                </div>
            )
        })
        setDisplay(itemsList)
      });


    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h2>Rhey's Art</h2>
                <Link href="/">
                <a className={styles2.a}>Home</a>
                </Link>
            </div>
            <div className={styles.head}>
            {display}
            </div>

            <div className={styles.privacy}>
              <h4>Privacy</h4>
          </div>

          <div className={styles.terms}>
              <h4>Terms</h4>
          </div>

          <div className={styles.about}>
              <h4>About</h4>
          </div>

            <div className={styles.footer}></div>

            
        </div>
    )
}