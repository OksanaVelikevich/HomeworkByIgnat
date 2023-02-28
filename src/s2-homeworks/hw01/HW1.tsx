import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

export type UserType = {
    avatar: string
    name:string
}

export type MessageType ={
    text: string
    time: string
}


export type Message0Type = {
    id: number
    user: UserType
    message: MessageType
}
// структуру объекта не менять

export const message0: Message0Type = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Oksi',  // можно менять
    },
    message: {
        text: 'Привет, приедешь ко мне на Партизу сегодня?', // можно менять
        time: '22:00', // можно менять
    },
};
export const friendMessage0: Message0Type = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Vita', // можно менять
    },
    message: {
        text: 'Привет, конечно, снимем Тик Токи!', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}  />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
