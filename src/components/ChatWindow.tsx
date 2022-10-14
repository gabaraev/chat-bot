import { useState, useEffect, useRef } from 'react';
import Message from './Message'
import Input from './Input';
import mMessage from '../models/mMessage';
import axios from 'axios';


interface chatWindowProps {
    setCharacter: React.Dispatch<React.SetStateAction<string>>
}

export default function ChatWindow ({ setCharacter }: chatWindowProps) {

    const [messages, setMessages] = useState([] as mMessage[])

    useEffect(() => {
        axios
        .get('http://localhost:8000')
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }, [])

    const endMessages = useRef(null);

    useEffect(() => {
        endMessages.current?.scrollIntoView()
    }, [messages])

    return (
        <div className='chat-window-wrapper'>
            <div className='top-overflow'/>
            <div className='chat-content'>
                <div className="messages">
                    {
                        messages.map(message => <div className={'message-box ' + message.user + '-message-wrapper'}><Message message={message}/></div>)
                    }
                </div>
                <div ref={endMessages} ></div>
            </div>
            <Input setMessages={setMessages} messages={messages} setCharacter={setCharacter}/>
        </div>
    )
}