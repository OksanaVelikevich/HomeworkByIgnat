import React from 'react'
import s from './Message.module.css'
import {Message0Type} from "../HW1";
// <style>
//     @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
// </style>
// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: Message0Type

}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>

            {/*<div className={s.angle} />*/}

            <div className={s.imageAndText}>
                <img src={props.message.user.avatar} alt={''}
                    id={'hw1-avatar-' + props.message.id}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <span>{props.message.user.name}</span>
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        <span>{props.message.message.text}</span>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                <span>{props.message.message.time}</span>
                {/**/}
            </div>
        </div>
    )
}

export default Message
