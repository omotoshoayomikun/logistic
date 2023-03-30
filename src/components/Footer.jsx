import React from 'react';
import styles from '../styles/Footer.module.css'
import { TextInput } from './Forms/Inputs';
import { Btn4 } from './Forms/Buttons';

function Footer() {

  const input = {
    placeholder: 'Email here*',
    type: 'email'
  }

  return (
    <>
      <footer className={styles.footer}>
        <img src="/imgs/seal.png" className={styles.bg} alt="" />
        <nav>
          <ul className={styles.ul}>
            <li>
              <a href="">
                <img src="/imgs/logo.png" className={styles.logo} alt="" />
              </a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Utility</a>
            </li>
            <li>
              <a href="">Subscribe</a>
            </li>
          </ul>
        </nav>
        <section className={styles.row}>
          <div className={styles.col}>
            <p>Leverage agile frameworks to provide a <span>robust synopsis for strategy  collaborative</span>  thinking to further the overall value <span>proposition.</span></p>
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
          </div>
          <div className={styles.col}>
            <a href=''>About Us</a>
            <a href=''>Our Team</a>
            <a href=''>Our Project</a>
            <a href="">Pricing</a>
            <a href=''>Contact</a>
          </div>
          <div className={styles.col}>
            <a href=''>Style Guide</a>
            <a href=''>Changelog</a>
            <a href=''>Licenses</a>
            <a href="">Protected</a>
            <a href=''>Not Found</a>
          </div>
          <div className={styles.col}>
            <div style={{ marginBottom: '20px' }}>
              <TextInput {...input} />
            </div>
            <div className="df ai jc-sb">
              <Btn4 text='Send Now' style={{ width: '148px', height: '60px' }} />
              <div>
                <img src="/imgs/linkdin.png" className={styles.icon_img} alt="" />
                <img src="/imgs/twitter.png" className={styles.icon_img} alt="" />
                <img src="/imgs/facebook.png" className={styles.icon_img} alt="" />
              </div>
            </div>
          </div>
        </section>
          <hr />
        <section>
          <div className={`df jc-sb ${styles.foot_b}`}>
            <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
            <ul className={styles.footer_ul}>
              <li>
                <a href="">Style Guide</a>
              </li>
              <li>
                <a href="">Licenses</a>
              </li>
              <li>
                <a href="">Changelog</a>
              </li>
              <li>
                <a href="">Password</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer