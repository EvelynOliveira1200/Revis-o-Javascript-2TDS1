// Se a altura for maior ou igual a altura mínima e menor que a altura máxima: permitido, senão: Não permitido.

 let alturaMinima = 1.50;
 let alturaMaxima = 1.90;
 let alturaPessoa = 1.60;

if(alturaPessoa >= alturaMinima && alturaPessoa < alturaMaxima) {
    console.log("Permitido!")
}else{    
    console.log("Não Permitido!")
}