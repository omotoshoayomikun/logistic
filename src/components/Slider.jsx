import React from 'react'
import styles from '../styles/Slider.module.css'
import { Btn1, Btn2 } from './Forms/Buttons'

function Slider() {
    return (
        <>
            <div className={styles.slider}>
                <nav className={styles.nav}>
                    <div className={styles.nav_links}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Project</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="/imgs/Instagram.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/imgs/facebook.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/imgs/twitter.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/imgs/linkdin.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Btn1 text='Request Quote' />
                </nav>
                <div className={styles.text_container}>
                    <div className={styles.text_log}>
                        Logistics & Supply Chain Solutions
                    </div>
                    <h1>
                        Your Gateway
                        <span>to any Destination </span>
                        in the World
                    </h1>
                    <p>In augue ligula, feugiat ut nulla consequat.
                        Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus,
                        enim diam interdum nulla, sed laoreet risus lectus.
                    </p>
                    <Btn2 text='Explore More' />
                </div>
            </div>
        </>
    )
}

export default Slider