import styles from './Owner.module.css'
// import React, {useEffect} from 'react'
import { NotificationRules } from '../../components/NotificationRules/NotificationRules'

const Owner = () => {    
    // useEffect(() => {
    //     setInterval(() => {
    //         let ws = new WebSocket('wss://javascript.info/article/websocket/demo/hello')
    //             ws.onopen = () => {console.log('open')}
    //     }, 3000)
    // }, [])



    return (
        <div className={styles.wrapper}>
            <h1>Главная</h1>

            <div>
                <NotificationRules/>
            </div>

        </div>
    )
}

export {Owner}