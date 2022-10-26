import express from "express"
// import { Pool } from 'pg';
import { PythonShell } from 'python-shell'
import { API } from 'vk-io'
import token from '../token'

// const vkPost = vk.wall.get({owner_id: -47535294, count: 1})

const app = express()
const APIvk = new API({ token: token})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  req.params

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://reflex-companion.web.app/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

// const pool = new Pool({
//   user: 'postgres',
//   password: 'ryanka',
//   host: 'localhost',
//   port: 5432,
//   database: 'postgres'
// });

// const newMessage = [
// 	{
// 	  "user": "bot",
// 	  "content": "Привет, чем я могу тебе помочь?"
// 	}
//   ]

app.get('/vk-main-post', async (req, res) => {
	// получаем объявление из вк
    const post = await APIvk.wall.get({owner_id: -47535294, count: 1})
    res.status(200).send(post)
    return

  // pool.query(`SELECT messages from chats WHERE id = ${req.query.id}`, (err, queryRes) => {
	// if (err)
	//   console.error(err)

	// if (queryRes.rows[0] === undefined) {
	//   pool.query(`INSERT INTO chats VALUES(${req.query.id}, '${JSON.stringify(newMessage)}')`, (err, queryRes) => {
	// 	if (err)
	// 	  console.error(err)
	//   })
	//   res.status(200).send(newMessage)
	//   return
	// }
	// const messages = queryRes.rows[0].messages
	// for (let i = 0; i < messages.length; i++)
	//   messages[i].content = messages[i].content.replaceAll('`', '"')

	// res.status(200).send(messages)
  // })
	
})

app.get('/vk-sic-post', async (req, res) => {
	const post = await APIvk.wall.get({owner_id: -76527561, count: 1})
    res.status(200).send(post)
    return
})

app.post('/', (req, res) => {
  //inserting incoming user message

  const options = {
	args: [req.body.content]
  };
  PythonShell.run('./Ml_chatbot/chatbot.py', options, (err, output) => {
    if (err)
      throw err;
    if (typeof output !== 'undefined') {
      const doubleQuotesOutput = output[0]
      .replaceAll("'", '"')
      .replaceAll('\\xa0', '') // breaks server 
      const answer = JSON.parse(doubleQuotesOutput)
      const messageContent = answer.content.replaceAll('`', '"')
    
      res.status(200).send({type: answer.type, content: messageContent})
    }
  })
	  // after sending message to the front: UPDATE it on the table
	  // pool.query(`SELECT messages FROM chats WHERE id = ${req.query.id}`, (err, queryRes) => {
		// if (err)
		//   console.error(err);
		// const messages = queryRes.rows[0].messages
		// messages.push({
		//   "user": "user",
		//   "content": req.body.content
		// })
		// messages.push({
		//   "user": "bot",
		//   "content": messageContent
		// })

		// pool.query(
		//   `UPDATE chats
		//   SET messages = '${JSON.stringify(messages)}'
		//   WHERE id = ${req.query.id}`, (err, queryRes) => {
		// 	if (err)
		// 	  console.error(err)
		//   })
	  // })
})

app.listen(8000, () => console.log('server started'));