import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import styles2 from '../styles/Button.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
          <h2>Very Simple Webshop</h2>
      </div>

      <div className={styles.photo}>
            <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="450" height="270"></img>
      </div>

      <div className={styles.buttonRow}>
      <Link href="/shop">
        <a className={styles2.a}>Explore</a>
        </Link>  
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
      
    </div>
  )
}
