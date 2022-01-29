import express from 'express'


const app = express();

app.use(express.json());

app.listen(3003, ()=> console.log('Foi'))

//1
app.get('/', (req, res)=>{
  res.status(200).send('Hello')
})


//2
type Users ={
  id: number,
  name: string,
  phone: number,
  email: string,
  website: string
}



//3

type Users2 ={
  id: number,
  name: string,
  userName: string,
  phone: number,
  email: string
  
}

const users: Users2[]=[
  {
  id: 1,
  name: 'Mariana',
  userName: 'MariLinda2000',
  phone: 31995556657,
  email: 'mari2000@hotmail.com'
  },
  {
  id: 2,
  name: 'Ana',
  userName: 'AnaSapekinha14',
  phone: 31995556658,
  email: 'anasapekinha@hotmail.com'
  },
  {
  id: 3,
  name: 'Marília',
  userName: 'Eu_Marília32',
  phone: 31995556659,
  email: 'marília8579154@hotmail.com'
  }
]


//4

app.get('/users', (req, res)=>{
  const copia = users
  res.status(200).send(copia)
})



//5

type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
}


//6

const posts: Post[]=[
  {
  id: 1,
  title: 'Bom dia',
  body: 'O dia está radiante!',
  userId: 1
  },
  {
  id: 2,
  title: 'Bom noite',
  body: "Big girls don't cry",
  userId: 1
  },
  {
  id: 3,
  title: 'Bom dia',
  body: 'O dia está radiante!',
  userId: 2
  },
  {
  id: 4,
  title: 'Bom noite',
  body: "Big girls don't cry",
  userId: 2
  },
  {
  id: 5,
  title: 'Bom dia',
  body: 'O dia está radiante!',
  userId: 3
  },
  {
  id: 6,
  title: 'Bom noite',
  body: "Big girls don't cry",
  userId: 3
  }
]


//7

app.get('/posts', (req, res)=>{
  const copiaPost = posts
  res.status(200).send(copiaPost)
})


//8

app.get('/posts/:id', (req, res)=>{
  const userId = Number(req.params.id)
  const filtro = posts.filter((post)=>{
      if(userId === post.userId){
        return post
      }
    })
  res.status(200).send(filtro)
})