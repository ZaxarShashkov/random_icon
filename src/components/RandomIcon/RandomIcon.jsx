import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4, faAnchorCircleXmark, faAnglesLeft, faSadCry, fas } from '@fortawesome/free-solid-svg-icons';
import styles from './RandomIcon.module.scss'
import Button from '../ui/Button/Button'
import Spinner from '../ui/spinner/Spinner';


const RandomIcon = () => {

    const [icon, setIcon] = useState()
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIcon = Object.values(fas)[Math.floor(Math.random() * Object.values(fas).length)];
            setIcon(randomIcon)
            setCount(count - 1)
            setLoading(false)
        }, 3000);

        if (count <= 0) {
            clearInterval(intervalId);
        }
        return () => (
            clearInterval(intervalId)
        );

    }, [count]);

    const handleClick = () => {
        setCount(count + 1)
        setLoading(true)
    }


    return (
        <div className={styles.randomIcon}>
            <div className={styles.randomIcon__icon}>
                {loading ? <Spinner /> : <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
            </div>
            <div className={styles.randomIcon__button}>
                <Button title={'Get random icon'} getRandomIcon={handleClick} />
            </div>
        </div>
    )
}

export default RandomIcon