import data from "../data/items.json"
import Link from 'next/link'
import styles from "../styles/Shop.module.scss"
import styles2 from '../styles/Button.module.sass'
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import { useMediaQuery } from 'react-responsive'
 

export default function Shop() {
    
const NoSSRComponent = dynamic(() => import("../components/DesktopShop"), {
    ssr: false,
  });
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })

      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })

      
                return (
                    <NoSSRComponent/>
                )
      
      
}