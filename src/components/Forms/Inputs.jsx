import React from 'react'
import styles from '../../styles/Forms/Inputs.module.css';

export const TextInput = (props) => {
    const {...detail} = props;
  return (
    <>
    <input {...detail} className={styles.input} />
    </>
  )
}

export const Textarea = () => {
  return (
    <>
    <textarea name="" id="" cols="30" rows="10" className={styles.textarea} placeholder='Your Message*'></textarea>
    </>
  )
}
