function Fibonacci (indice){
var anterior = 0
var atual = 1

for (var n = 0; n <= indice; n++){

    proximo = (atual + anterior)
    anterior = atual
    atual = proximo
    
}
return proximo
}
console.log(Fibonacci(5))