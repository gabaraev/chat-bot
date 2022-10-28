import { useState } from "react"
import mMessage from "../models/mMessage"
import axios from 'axios'
import Cookies from 'js-cookie'
import {initializeApp} from 'firebase/app'
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { config } from '../config'


const firebaseApp = initializeApp(config.firebase)
const db = getFirestore(firebaseApp)


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
        if (value.trim()) {
                const newMessage: mMessage = {
                user: 'user',
                content: value,
            };
            const previousMessagesForBotResponse = [...messages, newMessage]
            await setMessages(previousMessagesForBotResponse)
            setValue('');

            axios.post(`https://reflex-server.onrender.com/`, newMessage)
            .then(async res => {
                const botMessage: mMessage = {
                    user: 'bot',
                    content: res.data.content
                }
                setCharacter(`icons/characters/${res.data.type}`)
                
                setMessages([...previousMessagesForBotResponse, botMessage])
                const docRef = doc(db, 'chats', `${Cookies.get('id')}`)
                await updateDoc(docRef, {
                messages: arrayUnion([newMessage, botMessage])
            })
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