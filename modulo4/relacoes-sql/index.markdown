1 a) É uma forma de referenciar a uma Primary key de outra tabela.

b)
```
insert into Rating values ("01", "Ótimo filme", 8.0, "002"), 
("02", "Mais ou menos", 5.0, "003"), 
("03", "Maravilhoso", 9.9, "004");
```

c)
	Error Code: 1452. Cannot add or update a child row: a foreign key constraint.
    Deu erro, já que não existe o id na tabela Movies.

d)

```
alter table Movies drop column avaliation;
```

e)

```
delete from Movies where id = "002"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint
```
Retorna um erro, já que o id está sendo referenciado em outra tabela.


2 a)
É uma tabela que junta o id do filme com os ids dos atores.

b)

```
INSERT INTO MovieCast VALUES 
("002","001"), ("002","004"), ("003","005"),("003","006"), 
("004","004"), ("004","005");
```

c)

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint
```
Erro no id.

d)

```
delete from Actor where id = "005"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
```
Retorna um erro, já que o id está sendo referenciado em outra tabela.


3a)

Seria: junte através do id.

````
select Movies.title, Movies.id, Rating.rate from Movies
inner join Rating on Movies.id = Rating.movie_id;
```