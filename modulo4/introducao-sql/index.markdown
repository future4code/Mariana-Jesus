//1 a) varchar em 'id, name e gender' por que é assim que se declara uma string.

//b) 'Show databases' mostra a grid de databeses. 'Show tables' mostra as tabelas contidas no database.

//c) 'Describe' mostra o conteúdo da tabela.


//2 b) Fala que a chave não pode ser duplicada.

c) A contagem de valores não bate com os poucos valores declarados no parâmetro.

d) O campo de name não recebeu valor, já que não pode ser nulo, ocorreu um erro.

e) Data de nascimento não está como varchar, então está subtraindo.


A)
```
SELECT * from Actor WHERE gender = "female";
```

B)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

C) Retornou todos os valores como null, pois acho que a última linha sempre será null.


D)
```
SELECT id, name, salary FROM Actor WHERE salary < 500000
```

E)
A propriedade é name e não nome.
```
SELECT id, name from Actor WHERE id ="002";
```

//4a) Retorna os dados de quem tem o nome começado por A ou J e o salário acima de 300000.


//B
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

//C
```
SELECT * FROM Actor WHERE name LIKE "%g%" OR "G%";
```

//D
```
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "G%" OR name LIKE "%a%" OR name LIKE "A%") AND salary BETWEEN 350000 AND 900000;
```


6 a)
```
SELECT id, title, avaliation FROM Movies WHERE id = 002;
```

b)
```
SELECT * FROM Movies WHERE title = 'Tropa de elite';
```

c)
```
SELECT id, title, sinopse FROM Movies WHERE avaliation >= 7;
```


7 a)
```
SELECT * FROM Movies WHERE title LIKE  "vida%";
```

b)
```
SELECT * FROM Movies WHERE title LIKE  "Doca de mãe";
```

c)
```
SELECT * FROM Movies WHERE date < '2022-01-31';
```

d)
```
SELECT * FROM Movies WHERE date < '2022-01-31' AND (name = 'Tropa de elite' OR sinopse LIKE 'Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar.') AND
avaliation > 7;
```