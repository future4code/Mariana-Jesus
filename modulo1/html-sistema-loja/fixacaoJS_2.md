```
function calculaPrecoTotal(quantidade) {
 let valor
 if(quantidade < 12){
    valor = (quantidade * 1.30)
 }else{
     valor = (quantidade * 1.00)
 }
return valor
}
calculaPrecoTotal(2)
```