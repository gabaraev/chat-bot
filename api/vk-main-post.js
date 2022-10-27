import express from "express";
import { API } from 'vk-io'
import token from '../token.js'


const app = express()

const APIvk = new API({ token: token})

app.get('/', async (req, res) => {
	const post = await APIvk.wall.get({owner_id: -76527561, count: 1})
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send(post)
    return
})

export default app