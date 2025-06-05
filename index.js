require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/twitter', (req, res) => {
    res.send('twitter.com')
  });
app.get('/api/jokes', (req, res) => {
  const jokes =[
    {
    id:1,
    title:'A joke',
    content: 'This is a Joke'
    },
    {
      id:2,
      title:'Another joke',
      content: 'This is another Joke'
    },
    {
      id:3,
      title:'A third joke',
      content: 'This is third Joke'
    },
    {
      id:4,
      title:'A fourth joke',
      content: 'This is fourth Joke'
    },
    {
      id:5,
      title:'A fifth joke',
      content: 'This is fifth Joke'
    },
]
    res.send(jokes);
  });
app.get('/twitter', (req, res) => {
    res.send('twitter.com')
  });
app.get('/github' , (req,res) => {
  res.send('github.com')
});
app.get('/login',(req,res) =>{
    res.send('login')
});
app.get('/youtube',(req,res) =>{
    res.send('priyanshu youtube')
});
  
app.listen(process.env.PORT, () => {
  console.log(` app listening on port http://localhost:${port}`)
});