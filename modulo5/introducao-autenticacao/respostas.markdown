1 a) Acho que o tratamento de uma string seja mais fácil do que trabalhar com number.

2 a) Está fazendo a conexão com o mysql e fazendo uma função de criar user que será adicionada à tabela user.

b) 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
); 
```

3 a) Para garantir ao typescript de que a informação virá como uma string.

7 a) Tipa o retorno.