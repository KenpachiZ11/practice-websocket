import React, { useEffect, useState } from 'react'
import { PopUp } from '../Modal/Modal'
import styles from './Notification.module.css'

const Notification = (props) => {
    const [exit, setExit] = useState(false)
    const [width, setWidth] = useState(0)
    const [intervalID, setIntervalID] = useState(null)
    const [modal, setModal] = useState(false)
    
    const handleStartTimer = () => {
    const id = setInterval(() => {
        setWidth(prev => {
            if (prev < 100) {
                return prev + 0.7
            }
            clearInterval(id)
            return prev
        })
        }, 20)
    
        setIntervalID(id)
    }
    const handlePauseTimer = () => {
        clearInterval(intervalID)
    }
    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
    }
    useEffect(() => {
        if(width === 100) {
            handleCloseNotification()
        }
    }, [width])
    useEffect(() => {
        handleStartTimer()
    }, [])
    useEffect(() => {
        if(props.modal){
            handlePauseTimer()
        }
    })

    return (
        <div 
            className={`${styles.notification_item} 
            ${props.type === 'SUCCESS' ? styles.success : styles.error}
            ${exit ? styles.exit : ''}`}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
        >
            <p>{props.message}</p>
            <button onClick={() => setModal(true)}>Редактировать</button>
            {/* <button onClick={() => setExit(true)}>exit</button> */}
            <div className={styles.notification_bar} style={{width: `${width}%`}}/>
            <PopUp onClose={() => setModal(false)} modal={modal}/>
        </div>
    )
}

export {Notification}