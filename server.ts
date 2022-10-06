import express from "express"
import { PythonShell } from 'python-shell'


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  req.params

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

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

const messages = [
    {
      user: 'bot',
      content: `Привет, чем я могу тебе помочь?`
    }
  ]
 
app.get('/', (req, res) => {
    res.status(200).send(messages)
    
})

app.post('/', (req, res) => {
  messages.push(req.body)
  
  const options = {
    args: [req.body.content]
};

  PythonShell.run('ml/ML_chatbot/ML for chatbot.py', options, (err, output) => {
    if (err)
      console.error(err);

    if (typeof output !== 'undefined') {
      const doubleQuotesOutput = output[0].replaceAll("'", '"')
      const answer = JSON.parse(doubleQuotesOutput)
      const messageContent = answer.content.replaceAll('`', '"')
      messages.push( {
        user: 'bot',
        content: messageContent
      })   
      res.status(200).send({type: answer.type, content: messageContent})
    }
  })
})

app.listen(8000, () => console.log('server started'));