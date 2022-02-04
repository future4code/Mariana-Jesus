```
//1 a) A resposta vem em um objeto chamado 'RowDataPacket'
```

//b
```
app.get("/users/name/:name", async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection.raw(`
        select * from Actor where name = "${req.params.name}";
        `)
  res.status(200).send({message: result[0]})

    } catch (error:any) {
          console.log( error.sqlMessage || error.message)
      res.status(500).send("Unexpected error")
    }
})
```

//c
```
app.get("/users/gender/:gender", async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = "${req.params.gender}";
        `)
  res.status(200).send( result[0][0])

    } catch (error:any) {
          console.log( error.sqlMessage || error.message)
      res.status(500).send("Unexpected error")
    }
})
```

//1 a)
```
const updateActor = async (id: string, salary: number) => {
    return await connection('Actor')
    .update({
        salary:salary
    })
    .where({id: id})
}
```

b)
```
const deleteActor = async (id: string) => {
    return await connection('Actor')
    .delete()
    .where({id: id})
}
```

c)
```
const mediaActor = async (gender: string): Promise<any> => {
    const result = await connection('Actor')
    .avg('salary as average')
    .where({gender: gender})
    return result[0].average
    
}
```

//3 a)
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  })
```

b)
```
app.get("/actor", async (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;
      const actor = await getActorByName(name) ;
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  })
```

4 a)
```
app.post('/actor', async(req: Request, res: Response):Promise<void> =>{
    try{
        await updateActor(
            req.body.id,
            req.body.salary
        )
        res.status(201).send( 'Atualizado com sucesso')
    }
    catch (error:any) {
        console.log( error.sqlMessage || error.message)
    res.status(500).send("Unexpected error")
  }
})
```

b)
```
app.delete('/actor/:id', async(req: Request, res: Response):Promise<void> =>{
    try{
        await deleteActor(
            req.params.id,
        )
        res.status(201).send( 'Deletado com sucesso')
    }
    catch (error:any) {
        console.log( error.sqlMessage || error.message)
    res.status(500).send("Unexpected error")
  }
})
```
