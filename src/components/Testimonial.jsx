import React from 'react'
import styles from '../styles/Testimonial.module.css'

function Testimonial() {

  const comments = [
    {
      avatar: '/imgs/avatar1.png',
      fullname: 'Kathleen Smith',
      work: 'Fuel Company',
      comment: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
      avatar: '/imgs/avatar2.png',
      fullname: 'John Martin',
      work: 'Restoration Company',
      comment: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
  ]

  return (
    <>
      <div className={styles.test_container}>
        <div className='text_log'>Testimonial</div>
        <div className="df jc-sb">
          <div className="text_hub">What Our Customer Say</div>
          <div className={` df ${styles.arrow_cont}`}>
            <div className={styles.arrow}>
              <img src="" alt="" />
            </div>
            <div className={styles.arrow}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.row__}>
          {
            comments.map(comment => (
              <div className={styles.col__}>
                <div className="df jc-sb">
                  <div className='df ai'>
                    <img src={comment.avatar} className={styles.avatar} alt="" />
                    <div>
                      <h3>{comment.fullname}</h3>
                      <h4>{comment.work}</h4>
                    </div>
                  </div>
                  <img src="/imgs/qoute.png" className={styles.qoute} alt="" />
                </div>
                <p>{comment.comment}</p>
                <div className={styles.stars}>
                  <img src="/imgs/stars.png" alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Testimonial