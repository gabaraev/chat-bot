import { useState } from 'react'
import axios from "axios"


const getPost = async () => {
    try {
        const {data: response} = await axios.get('https://reflex-server.onrender.com/vk-abit-post')
        return response
        
    } 
    catch (err) {
        console.log(err)
    }
}

export default function VKAbit()  {
    const [link, setLink] = useState('https://vk.com/abitur.sfedu?w=wall-205247745_655')
    const [content, setContent] = useState(``)

    getPost().then(res => {
        const data = res.items[0]
        setLink(`https://vk.com/sfedu_official?w=wall-205247745_${data.id}`)
        setContent(data.text.slice(0, 150).replaceAll(/(id|club)[0-9]+\||[\[,\]]/g, '').trim() + '...')
    })
    return(
        <a href={link} target='_blank'><div className="ad"><p>{content}</p></div></a>
    )
}