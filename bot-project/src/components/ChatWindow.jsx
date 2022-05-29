import { useState } from 'react';
import Message from './Message'
import Input from './Input';

export default function ChatWindow ({messages}) {

    return (
        <div className='chat-window-wrapper'>
            <div className="chat-window">
                <div className='messages-pusher'></div>
                {
                    messages.map(message => <div className={'wrapper ' + message.user + '-message-wrapper'}><Message message={message}/></div>)
                }
            </div>
            <Input />
        </div>
    )
}