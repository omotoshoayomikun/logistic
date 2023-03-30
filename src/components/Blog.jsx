import React from 'react';
import styles from '../styles/Blog.module.css'
import { Btn3 } from './Forms/Buttons';

function Blog() {


  const datas = [
    {
      image: '/imgs/new1.png',
      date: '08',
      month: 'September',
      header: 'Inland freight a worthy solution for your business',
      sub_header: 'We are dedicated in creating added value for our customers by implementing modern technology in our work.',
      list: [
        'Urgent transport solutions',
        'Reliable & experienced staffs',
        'Urgent transport solutions',
        'Reliable & experienced staffs',
      ]
    },
    {
      image: '/imgs/new2.png',
      date: '12',
      month: 'September',
      header: 'How technology can help redraw the supply chain map',
      sub_header: 'We are dedicated in creating added value for our customers by implementing modern technology in our work.',
      list: [
        'Urgent transport solutions',
        'Reliable & experienced staffs',
        'Urgent transport solutions',
        'Reliable & experienced staffs',
      ]
    },
    {
      image: '/imgs/new3.png',
      date: '25',
      month: 'September',
      header: 'Five things you should have ready for your broker',
      sub_header: 'We are dedicated in creating added value for our customers by implementing modern technology in our work.',
      list: [
        'Urgent transport solutions',
        'Reliable & experienced staffs',
        'Urgent transport solutions',
        'Reliable & experienced staffs',
      ]
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className='text_log text-center'>Our Blog</div>
        <div className="text_hub text-center">Our Latest News</div>
        <div className={styles.row}>
          {
            datas.map((data, i) => (
              <div key={i} className={styles.col}>
                <div>
                  <a href="#" className={styles.link}>
                    <img src={data.image} className={styles.image_wrap} alt="" />
                  </a>
                </div>
                <div className={styles.calender}>
                  <img src="/imgs/calender.png" className={styles.img_cal} alt="" />
                  <div className={styles.date}>{data.date}</div>
                  <div className={styles.month}>{data.month}</div>
                </div>
                <div className={styles.blog}>
                  <h2>{data.header}</h2>
                  <p>{data.sub_header}</p>
                  <ul>
                    {
                      data.list.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
        <Btn3 text='More Blog' />
      </div>
    </>
  )
}

export default Blog