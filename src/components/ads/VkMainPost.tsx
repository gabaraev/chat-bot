import { useState } from 'react'
import axios from "axios"


const getPost = async () => {
    try {
        const {data: response} = await axios.get('https://reflex-server.onrender.com/vk-main-post')
        return response
        
    } 
    catch (err) {
        console.log(err)
    }
}

export default function VKMain()  {
    const [link, setLink] = useState('https://vk.com/sfedu_official?w=wall-47535294_35309')
    const [content, setContent] = useState(`Привет, первокурсник ЮФУ!\n
    Сейчас ты на заре новой главы своей жизни, теперь ты студент, чей-то новый друг и ученик. 
    Но самое главное, теперь ты часть большой семьи! Мы ждём, что здесь ты будешь вдохновляться и достигать, но останешься собой!`)

    getPost().then(res => {
        const data = res.items[0]
        setLink(`https://vk.com/sfedu_official?w=wall-47535294_${data.id}`)
        setContent(data.text.slice(0, 150).replaceAll(/(id|club)[0-9]+\||[\[,\]]/g, '').trim() + '...')
    })
    return(
        <a href={link} target='_blank'><div className="ad"><p>{content}</p></div></a>
    )
}