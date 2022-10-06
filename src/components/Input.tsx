import React, { useState } from "react"
import mMessage from "../models/mMessage"
import axios from 'axios'


interface InputProps {
    messages: mMessage[]
    setMessages: Function
};

export default function Input({ messages, setMessages }: InputProps) {

    const [value, setValue] = useState('');

    const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(target.value)
    }

    const sendMessage = async () => {
        if (value !== '' && value !== '\n') {
                const newMessage: mMessage = {
                user: 'user',
                content: value,
            };
            const previousMessagesForBotResponse = [...messages, newMessage]
            await setMessages(previousMessagesForBotResponse)
            setValue('');

            axios.post('http://localhost:8000', newMessage)
            .then(async res => {
                const botMessage: mMessage = {
                    user: 'bot',
                    content: res.data.content
                }
                console.log(res.data.content);
                
                await setMessages([...previousMessagesForBotResponse, botMessage])
            })
            .catch(err => console.error(err));
        }
    }

    const sendOnEnter = ({ key }: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (key === 'Enter' && value !== '')
            sendMessage()
    }

    return (
        <div className="message-input-wrapper">
            <textarea
                className="message-input"
                onChange={handleChange} 
                placeholder="Начните писать сообщение..."
                value={value}
                onKeyDown={sendOnEnter}
            />
            <button className="message-button" onClick={sendMessage}><img src='icons/Sendstrelka.svg' alt="отправить сообщение"/></button>
        </div>
    )
}