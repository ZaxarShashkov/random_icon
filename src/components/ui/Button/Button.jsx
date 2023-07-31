import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title, getRandomIcon }) => {
    return (
        <>
            <button className={styles.button} type='button' onClick={getRandomIcon}>{title}</button>
        </>
    )
}

export default Button;