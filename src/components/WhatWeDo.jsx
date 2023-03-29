import React from 'react'
import styles from '../styles/WhatWeDo.module.css';

function WhatWeDo() {
  return (
    <>
      <div className={styles.service}>
        <div className={styles.col}>
          <div className='text_log'>What We Do </div>
          <h1 className='text_hub' >Safe & Reliable <span className='db'>Cargo Solutions</span></h1>
        </div>
        <div className={styles.col}>
          <div className={styles.col_wrap}>
            <div className={styles.icon}>
              <img src="/imgs/ship.png" alt="" />
            </div>
            <div className={styles.line}></div>
            <div>
              <h2>Sea Transport Services</h2>
              <p>Following the quality of our service <span className='db'>thus having gained trust of our</span> many clients.</p>
            </div>
          </div>

          <div className={styles.col_wrap}>
            <div className={styles.icon}>
              <img src="/imgs/air_plane.svg" alt="" />
            </div>
            <div className={styles.line}></div>
            <div>
              <h2>Air Fright Services</h2>
              <p>Following the quality of our service <span className='db'>thus having gained trust of our</span> many clients.</p>
            </div>
          </div>

        </div>
        <div className={styles.col}>
          <div className={styles.col_wrap}>
            <div className={styles.icon}>
              <img src="/imgs/house.png" alt="" />
            </div>
            <div className={styles.line}></div>
            <div>
              <h2>Warehousing Services</h2>
              <p>Following the quality of our service <span className='db'>thus having gained trust of our</span> many clients.</p>
            </div>
          </div>

          <div className={styles.col_wrap}>
            <div className={styles.icon}>
              <img src="/imgs/bus.png" alt="" />
            </div>
            <div className={styles.line}></div>
            <div>
              <h2>Local Shipping Services</h2>
              <p>Following the quality of our service <span className='db'>thus having gained trust of our</span> many clients.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default WhatWeDo