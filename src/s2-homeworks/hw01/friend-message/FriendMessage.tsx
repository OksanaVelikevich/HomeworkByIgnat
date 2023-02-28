import React from 'react'
import s from './FriendMessage.module.css'
// @ts-ignore
import {MessagePropsType} from "../message/Message";
import {Message0Type} from "../HW1";
export type MessagePropsType = {
    message: Message0Type

}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.message.text}</span>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <span>{props.message.message.time}</span>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
