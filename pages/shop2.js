import data from "../data/items.json"
import Link from 'next/link'
import styles from "../styles/Shop.module.scss"
import styles2 from '../styles/Button.module.sass'
import { useState, useEffect } from "react"

import { useMediaQuery } from 'react-responsive'
 

export default function Shop2() {
   

    const [display, setDisplay] = useState([]);
    useEffect(() => {
        
        let itemsList = []
        data.map((product)=>{
            
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

return(<div className={styles.container}>
    <div className={styles.banner}>
        
    </div>
    <div className={styles.head}>
    {display}
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

    
</div>)

}