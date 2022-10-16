import { useState } from "react"
import mMessage from "../models/mMessage"
import axios from 'axios'


interface InputProps {
    messages: mMessage[]
    setMessages: Function
    setCharacter: React.Dispatch<React.SetStateAction<string>>
};

export default function Input({ messages, setMessages, setCharacter }: InputProps) {

    const [value, setValue] = useState('');

    const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!target.value.startsWith('\n'))
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
                setCharacter(`icons/characters/${res.data.type}.svg`)
                
                await setMessages([...previousMessagesForBotResponse, botMessage])
            })
            .catch(err => console.error(err));
        }
    }

    const sendOnEnter = ({ key }: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (key === 'Enter')
            sendMessage()
    }

    return (
        <div className='input-outline'>
            <div className="message-input-wrapper">
                <textarea
                    className="message-input"
                    onKeyDown={sendOnEnter}
                    onChange={handleChange} 
                    placeholder="Начните писать сообщение..."
                    value={value}
                />
                <button className="message-button" onClick={sendMessage}><img src='icons/Sendstrelka.svg' alt="отправить сообщение"/></button>
            </div>
        </div>
    )
}