import { Router } from "express";
import { API } from 'vk-io'
import token from '../token.js'


const Main = Router()

const APIvk = new API({ token: token})

Main.get('/', async (req, res) => {
	const post = await APIvk.wall.get({owner_id: -76527561, count: 1})
    res.status(200).send(post)
    return
})

export default Main