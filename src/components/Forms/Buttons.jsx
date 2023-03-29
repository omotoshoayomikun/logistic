import React from 'react';
import styles from '../../styles/Forms/Buttons.module.css'

export const Btn1 = ({text}) => {
  return (
    <>
    <button className={styles.btn1}>{text}</button>
    </>
  )
}

export const Btn2 = ({text}) => {
  return (
    <button className={styles.btn2}>{text}</button>
  )
}
