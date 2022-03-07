import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { DisplayCityStats } from '../lib/DisplayCityStats'

export default function Home() {
  return (
    <div className={styles.bigGrid}>
      <section className={styles.searchSec}>
        <label htmlFor="citySearch">Search by City Name:</label>
        <input id="citySearch" type="text" placeholder="eg. London" name="location"></input>
        <button>Search!</button>
        <button>Random!</button>
        <button>Hide history</button>
      </section>
      <DisplayCityStats city={0} /> 
    </div>
  )
}
