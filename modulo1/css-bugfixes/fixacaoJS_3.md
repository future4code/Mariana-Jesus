```
function calculaNota(ex, p1, p2) {
	  
	  const media = (ex + p1 + p2) /3
	  let nota
	  if(media >= 9){
	    return nota = "A"
	  }else if(media < 9 && media >= 7.5){
	    return nota = B
	  }else if(media < 7.5 && media >= 6){
	    return nota = "c"
	  }else{
	    return nota = "D"
	  }
	  return nota
	}
	console.log(calculaNota())

```