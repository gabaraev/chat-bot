import { useState, useEffect, useRef } from 'react';
import Message from './Message'
import Input from './Input';
import mMessage from '../models/mMessage';
// import axios from 'axios';
import Cookies from 'js-cookie';
import {initializeApp} from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { config } from '../config'


const firebaseApp = initializeApp(config.firebase)
const db = getFirestore(firebaseApp)



interface chatWindowProps {
    setCharacter: React.Dispatch<React.SetStateAction<string>>,
    theme: string,
    character: string,
    setMCharacter: React.Dispatch<React.SetStateAction<string>>
}

export default function ChatWindow ({ setCharacter, theme, character, setMCharacter }: chatWindowProps) {

    const [messages, setMessages] = useState([] as mMessage[])

    const handleNewUser = async () => {
        const newUserID = Date.now().toString()
        Cookies.set('id', newUserID)
        const initialMessage: mMessage[] = [{
            user: 'bot',
            content: 'Привет, чем я могу тебе помочь?'}
        ]

        const docRef = doc(db, 'chats', `${newUserID}`)
        await setDoc(docRef, {
        messages: initialMessage
        })
        setMessages(initialMessage)
    }

    const fetchMessages = async () => {
        const userID = Cookies.get('id')
        const docRef = doc(db, 'chats', `${userID}`)
        const docSnap = await getDoc(docRef)
        if (typeof docSnap.data() !== 'undefined') {
            setMessages(docSnap.data().messages)
            return
        }
        handleNewUser()
    }

    useEffect(() => {
        fetchMessages()
    }, [])

    const endMessages = useRef(null);

    useEffect(() => {
        endMessages.current?.scrollIntoView()
    }, [messages])

    return (
        <>
        {window.screen.width <= 500 ?
            <div className='chat-window-wrapper' data-theme={theme} >
                <div className='top-overflow'/>
                <div className='chat-content'>
                    <img className='m-character' src={`${character}-light.svg`} alt="I'm supposed to be here :("></img>
                    <div className="messages">
                        {
                            messages.map(message => <div className={'message-box ' + message.user + '-message-wrapper'}><Message message={message}/></div>)
                        }
                    </div>
                    <div ref={endMessages} ></div>
                    </div>
                    <Input setMessages={setMessages} messages={messages} setCharacter={setMCharacter}/>
            </div>
        :
            <div className='chat-window-wrapper' data-theme={theme} >
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
        }
            
        </>
    )
}