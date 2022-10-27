import { Router } from "express";
import { API } from 'vk-io'
import token from '../token.js'


const Sic = Router()
const APIvk = new API({ token: token})

Sic.get('/vk-sic-post', async (req, res) => {
	const post = await APIvk.wall.get({owner_id: -76527561, count: 1})
    res.status(200).send(post)
    return
})

export default Sic