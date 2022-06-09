import React from 'react'
import styles from './Modal.module.css'
import { CloseOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const PopUp = (props) => {
  if(!props.modal){
    return null
  }
  const handleClick = () => {
    console.log('click')
  }
    return (
      <div className={styles.wrapper_modal} onClick={props.onClose}>
        <div className={styles.wrapper_modal__content} onClick={e => e.stopPropagation()}>
          <button className={styles.wrapper_modal__close} onClick={props.onClose}><CloseOutlined /></button>
          <div className={styles.wrapper_modal__content_main}>
            <Input
              placeholder="Basic usage"
            />
            <button onClick={handleClick}>Sumbit</button>
          </div>
        </div>
      </div>
    )
}

export {PopUp}
