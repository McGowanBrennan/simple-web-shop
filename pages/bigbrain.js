import data from "../data/items.json"
import Link from 'next/link'

import styles2 from '../styles/Button.module.sass'
import styles from "../styles/Products.module.scss"

export default function Bigbrain(){

    return(
        <div className={styles.container}>

            <div className = {styles.photo}>
                <img src="6.jpg" width="500" height="500"/>
            </div>

            <div className={styles.dimensions}>
                <h3>Dimensions: 10 x 12 (in)</h3>
            </div>

            <div className={styles.medium}>
                <h3>Medium: Colored pencil on paper</h3>
            </div>

            <div className={styles.created}>
                <h3>Date Created: 11/9/20</h3>
            </div>

            <div className={styles.order}>
            <Link href={{
                        pathname: "/payment",
                        query: { price: 30, name: "Big Brain" }
                    }}>
                    <a className={styles2.a}>Order Now</a>
                    </Link>
                
            </div>

        </div>
    )

}