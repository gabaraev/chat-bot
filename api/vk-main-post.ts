import { Router } from "express";
import { API } from 'vk-io'
import token from '../token'


const APIvk = new API({ token: token})

const vkMainPost = Router()

vkMainPost.get('/vk-main-post', async (req, res) => {
	// получаем объявление из вк
    const post = await APIvk.wall.get({owner_id: -47535294, count: 1})
    res.status(200).send(post)
    return
})

export default vkMainPost