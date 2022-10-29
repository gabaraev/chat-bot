import { useState } from 'react'
import axios from "axios"


const getPost = async () => {
    try {
        const {data: response} = await axios.get('http://127.0.0.1:5000/vk-com-post')
        return response
        
    } 
    catch (err) {
        console.log(err)
    }
}

export default function VKCom()  {
    const [link, setLink] = useState('https://vk.com/abiturientsfedu?w=wall485005212_292%2Fall')
    const [content, setContent] = useState(``)

    getPost().then(res => {
        const data = res[0]
        setLink(`https://vk.com/abiturientsfedu?w=wall485005212_${data.id}`)
        setContent(data.text.slice(0, 60).replaceAll(/(id|club)[0-9]+\||[\[,\]]/g, '').trim() + '...')
    })
    return(
        <a href={link} target='_blank'><div className="ad"><p>{content}</p></div></a>
    )
}