import { useState } from 'react'
import axios from "axios"


const getPost = async () => {
    try {
        const {data: response} = await axios.get('https://reflex-server.onrender.com/vk-sic-post')
        return response
        
    } 
    catch (err) {
        console.log(err)
    }
}

export default function VKSic()  {
    const [link, setLink] = useState('https://vk.com/sicsfedu?w=wall-76527561_19154')
    const [content, setContent] = useState(`КУБОК ПЕРВОКУРСНИКА: ИТОГИ 🏅
    У факультетов были сжатые сроки, море идей и первокурсники, готовые показать себя! Что из этого вышло — посмотрим на результаты:
    `)

    getPost().then(res => {
        const data = res[0]
        setLink(`https://vk.com/sfedu_official?w=wall-76527561_${data.id}`)
        setContent(data.text.slice(0, 60).replaceAll(/(id|club)[0-9]+\||[\[,\]]/g, '').trim() + '...')
    })
    return(
        <a href={link} target='_blank'><div className="ad"><p>{content}</p></div></a>
    )
}