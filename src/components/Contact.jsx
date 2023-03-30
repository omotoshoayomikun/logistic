import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'
import { TextInput, Textarea } from './Forms/Inputs';
import { Btn4 } from './Forms/Buttons';

function Contact() {

  const [details, setDetails] = useState({

  })


  const inputs = [
    {
      type: 'text',
      placeholder: 'Your name*',
    },
    {
      type: 'email',
      placeholder: 'Email*',
    },
    {
      type: 'text',
      placeholder: 'Phone number*',
    },
    {
      type: 'text',
      placeholder: 'City*',
    },
  ]


  return (
    <div id='contact' className={styles.container}>
      <div className={styles.wrapper}>
            <div className='text_log white'>Contact</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className="text_hub white">Get in touch with us</div>
            <p className="text-sub-kik">
              Leverage agile frameworks to provide a robust <span className='db'>synopsis for strategy foster collaborative</span> thinking to further the overall value.
            </p>
            <div className={`mt32 ${styles.nav_wrap}`}>
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
          </div>
          <div className={styles.col}>
            <div className={styles.gap}>
              {
                inputs.map(input => (
                  <TextInput {...input} />
                )).slice(0, 2)
              }
            </div>
            <div className={styles.gap}>
              {
                inputs.map((input, i) => (
                  <TextInput key={i} {...input} />
                )).slice(2, 4)
              }
            </div>
            <Textarea />
            <div className={styles.bjfc}>
              <Btn4 text='Submit Message' />
            </div>
          </div>
        </div>
        <div className="df">
          <div className="flex-1">
            <img src="/imgs/studio.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="/imgs/norto.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="/imgs/points.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="/imgs/outofthe.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact