import styles from './NotificationRules.module.css'
import {v4} from 'uuid'
import { Notification } from '../Notification/Notification'
import { useState, useEffect } from 'react'

const NotificationRules = () => { 

    const [post, setPost] = useState()

    const notifications = [
        {
            id: v4(),
            type: 'SUCCESS',
            message: `${post}`,
        },
        // {
        //     id: v4(),
        //     type: 'ERROR',
        //     message: 'Hello World 2',
        // },
    ]

    // const msg = {
    //     id: v4(),
    //     type: 'message',
    //     text: 'Ping',
    //     date: Date.now()
    // }


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
            // ws.onopen = () => {console.log(JSON.stringify(notifications[0].type))}
            ws.onopen = function(event) {
                ws.send('Ping')
                // ws.send(JSON.stringify(event.data))
            }
            ws.onmessage = function(event) {
                console.log('Pong', event.data)
                setPost(event.data)
            }
        }, 3000)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.notification_wrapper}>
                {
                    notifications.map(note => {
                        return <Notification key={note.id} {...note}/>
                    })
                }
            </div>

            <div>
                {/* <h1>{post}</h1> */}
            </div>
        </div>
    )
}

export {NotificationRules}