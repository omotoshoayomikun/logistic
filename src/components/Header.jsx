import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_img}>
          <img src="/imgs/logo.png" alt="" />
        </div>
        <nav className={styles.nav}>
          <div className={styles.nav_wrap}>
            <div>
              <img className={styles.nav_img} src="/imgs/clock.png" alt="" />
            </div>
            <span className={styles.nav_text}>
              Mon - Sat 9.00 - 18.00 <span> Sunday Closed</span>
            </span>
          </div>
          <div className={styles.nav_wrap}>
            <div>
              <img className={styles.nav_img} src="/imgs/mail.png" alt="" />
            </div>
            <span className={styles.nav_text}>
              Email<span>contact@logistics.com</span>
            </span>
          </div>
          <div className={styles.nav_wrap}>
            <div>
              <img className={styles.nav_img} src="/imgs/phone.png" alt="" />
            </div>
            <span className={styles.nav_text}>
              Call Us<span>(00) 112 365 489</span>
            </span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header