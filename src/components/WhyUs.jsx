import React from 'react';
import styles from '../styles/WhyUs.module.css';
import { Btn3 } from './Forms/Buttons';

function WhyUs() {

    const figure = [
        {
            text1: 'Liquid Transportation',
            text2: 'Premium Tankers'
        },
        {
            text1: 'Packaging Solutions',
            text2: 'Warehouse Management'
        },
        {
            text1: 'Contract Logistics',
            text2: 'Road Transportation'
        },
        {
            text1: 'Warehouse & Distribution',
            text2: 'Large Warehouse'
        },
        {
            text1: 'Specialized Transport',
            text2: 'Ocean Transports'
        }
    ]

    return (
        <>
            <div className={styles.why_container}>
                <div className={styles.bg_image}></div>
                <div className={styles.card}>
                    <div className="">
                        <div className={styles.text_log}>Why Us </div>
                        <h1 className='text_hub'>We provide full range global logistics solution</h1>
                        <p className={styles.text_p}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                        <br />
                        <p className={styles.text_p}>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        <div className="df ai mb22">
                            <div><img src="/imgs/box.png" alt="" /></div>
                            <h2 className={styles.textQ}>Delivery on Time</h2>
                        </div>
                        <div className="df ai">
                            <div><img src="/imgs/card.png" alt="" /></div>
                            <h2 className={styles.textQ}>Optimized Travel Cost</h2>
                        </div>
                    </div>
                    <div className="">
                        <img src="/imgs/air.png" alt="" />
                    </div>
                    <div className={styles.holder}>
                        <div className={styles.holder_container}></div>
                        <div className={styles.holder_img}>
                            <img src="/imgs/lady.png" alt="" />
                        </div>
                    </div>
                </div>

                <section className={styles.section_2}>
                    <div className={styles.figure}>
                        <div className={styles.fig_cont}>
                            <h1 className={styles.fig_h1}>1294</h1>
                            <span className={styles.fig_pattern}></span>
                            <p>Delivered Packages</p>
                        </div>
                        <div className={styles.fig_cont}>
                            <h1 className={styles.fig_h1}>1294</h1>
                            <span className={styles.fig_pattern}></span>
                            <p>Delivered Packages</p>
                        </div>
                    </div>

                <div className={styles.section_3}>
                    <h2 className='text_hub'>Transporting Across The World</h2>
                    <div className={styles.row_}>
                        {
                            figure.map(fig => (
                                <div className={styles.col_}>
                                    <h3>{fig.text1}</h3>
                                    <p>{fig.text2}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Btn3 text='More Work' />
                    <div className={styles.dec}></div>
                </div>
                </section>
            </div>
        </>
    )
}

export default WhyUs