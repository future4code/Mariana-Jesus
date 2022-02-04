1 a) Exclui uma coluna;

b) Muda nome de uma proriedade;

c) Muda o tipo da propriedade e mantém o mesmo nome.

d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


2 a)
```
UPDATE Actor SET name = "Mariana Santos", 
birth_date = "2000-01-03"
WHERE id = "003";
```

b)

```
UPDATE Actor SET name = UPPER("Juliana Paes")
WHERE id = "005";
```
```
UPDATE Actor SET name = ("Juliana Paes")
WHERE id = "005";
```

c)
```
UPDATE Actor SET name = "Thomas Cruise", 
salary = 2000000,
birth_date = "1962-06-03",
gender = "male",
favorite_ice_cream_flavor = "blue ice",
type = "Director"
WHERE id = "005";
```

d) Não dá erro.
```
UPDATE Actor SET name = "Thomas Cruise", 
salary = 2000000,
birth_date = "1962-06-03",
gender = "male",
favorite_ice_cream_flavor = "blue ice",
type = "Director"
WHERE id = "010";
```


3 a)
```
DELETE FROM Actor WHERE name = "Fernanda Montinegro";
```

b)
```
DELETE FROM Actor WHERE (gender = "male") AND salary >1000000;
```


4 a)
```
SELECT MAX(salary) from Actor;
```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```


5 a)
Faz a contagem de cada sexo separadamente.

b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor ORDER BY salary ASC;
```

d)
```
SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;
```

e)
```
SELECT COUNT(*), AVG(salary), gender
FROM Actor
GROUP BY gender;
```

6 a)
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movies CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movies SET playing_limit_date = "2020-02-27"
WHERE id = "001";

UPDATE Movies SET playing_limit_date = "2022-02-27"
WHERE id = "002";
```

d) Dá a mensagem de sucesso, mas nada acontece.
```
DELETE FROM Movie WHERE id = "001"
```