import styles from './NotificationRules.module.css'
import { v4 } from 'uuid'
import { Notification } from '../Notification/Notification'
import { useState, useEffect } from 'react'

const NotificationRules = () => {
    const [notifications, setNotifications] = useState([]);
    // const getMetod = fetch('wss://javascript.info/article/websocket/demo/hello', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // })
    // const postMetod = fetch('wss://javascript.info/article/websocket/demo/hello', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // })
    // const putMetod = fetch('wss://javascript.info/article/websocket/demo/hello', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // })
    // const delMetod = fetch('wss://javascript.info/article/websocket/demo/hello', {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // })

    useEffect(() => {
        setInterval(() => {
            const ws = new WebSocket('wss://javascript.info/article/websocket/demo/hello')
            ws.onopen = function (event) {
                ws.send('Ping')
            }
            ws.onmessage = function (event) {
                console.log('Pong', event.data)
                setNotifications([
                    {
                        id: v4(),
                        type: 'SUCCESS',
                        message: `${event.data}`
                    }
                ]);
            }
        }, 3000);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.notification_wrapper}>
                {
                    notifications.map(note => {
                        return <Notification key={note.id} {...note}/>
                    })
                }
            </div>
        </div>
    )
}

export { NotificationRules }