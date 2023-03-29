import React from 'react'
import styles from '../styles/WhyChoose.module.css';

function WhyChoose() {
    return (
        <>
            <div className={styles.cvmndajs}>
                <div className={styles.wrap}>
                    <div className={styles.img_header}>
                        <img src="/imgs/plane.png" alt="" className={styles.__img} />
                        <img src="/imgs/product.png" alt="" className={styles.__img_x} />
                    </div>
                </div>
                <div className={styles.wrap}>
                    <div className="text_log">Why Choose</div>
                    <h1 className="text_hub">We create opportunity to <span className='db'>reach potential</span></h1>
                    <p className={styles.text_p}>Leverage agile frameworks to provide a robust synopsis for <span className="db">strategy foster collaborative thinking to further the overall value</span> proposition. </p>

                    <div className="df">
                        <div>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/box.png" alt="" />
                                <span className={styles.text_span}>Safe Package</span>
                            </div>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/web.png" alt="" />
                                <span className={styles.text_span}>Global Tracking</span>
                            </div>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/clock_box.png" alt="" />
                                <span className={styles.text_span}>In Time Delivery</span>
                            </div>
                        </div>
                        <div className={styles.vbnc}>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/ship_box.png" alt="" />
                                <span className={styles.text_span}>Ship Everyware</span>
                            </div>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/head_phone.png" alt="" />
                                <span className={styles.text_span}>24/7 Support</span>
                            </div>
                            <div className={`df ai ${styles.pac}`}>
                                <img src="/imgs/round.png" alt="" />
                                <span className={styles.text_span}>Transparant Pricing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose