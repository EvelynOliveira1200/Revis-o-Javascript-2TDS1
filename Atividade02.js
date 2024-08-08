let ingressos = 30;
let batatas = 0;

for (let i = 1; i <= ingressos; i++) {
  if(i % 3 === 0){
    batatas++;
  }
}   if (batatas > 0) {
        console.log("Você ganhou", (batatas), "Batatas Fritas!")
    } else{
        console.log("Você não ganhou nenhuma batata frita😢")  
    }