import React from 'react';
import styles from '../styles/The_Transporters.module.css'

function The_Transporters() {

  const details = [
    {
      image: '/imgs/lady2.png',
      fullname: 'Jessca Arow',
      work: 'Designer',
      social: [
        '/imgs/twitter_b.png',
        '/imgs/facebook_b.png',
        '/imgs/instagram_b.png',
      ]
    },
    {
      image: '/imgs/guy.png',
      fullname: 'Kathleen Smith',
      work: 'Designer',
      social: [
        '/imgs/linkedin_b.png',
        '/imgs/twitter_b.png',
        '/imgs/facebook_b.png',
        '/imgs/instagram_b.png',
      ]
    },
    {
      image: '/imgs/lady3.png',
      fullname: 'Rebecca Tylor',
      work: 'Designer',
      social: [
        '/imgs/facebook_b.png',
        '/imgs/instagram_b.png',
      ]
    },
  ]


  return (
    <>
      <div className={styles.container}>
        <div className='text_log text-center'>The Transporters</div>
        <h1 className="text_hub text-center">Meet Expert Team</h1>
        <div className={styles.row}>
          {
            details.map(detail => (
              <div className={styles.col}>
                <img src={detail.image} alt="" className={styles.image} />
                <div className={styles.col_footer}>
                  <h3 className="text-kit">{detail.fullname}</h3>
                  <h4 className="text-skit">{detail.work}</h4>
                  <div className={styles.social_media}>
                    {
                      detail.social.map(social => (
                        <img src={social} alt="" className={styles.social_image} />
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default The_Transporters