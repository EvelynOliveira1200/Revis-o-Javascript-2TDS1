let idadeMinima = 7
let idadeAluno = 18
let categoriaMinima = 7
let categoriaMedia = 15
let categoriaMaxima = 20
let nome = "Evelyn"

if (idadeAluno >= idadeMinima) {
    console.clear()
    console.log("A matricula de", (nome), "foi aceita com sucesso!")
} else {
    console.clear()
    console.log("A matricula de", (nome), "foi Recusada")
} 
let categoria = " ";
if (idadeAluno >= 7 && idadeAluno <= 10) {
  categoria = "Infantil";
} else if (idadeAluno >= 11 && idadeAluno <= 14) {
  categoria = "Juvenil";
} else if (idadeAluno >= 15 && idadeAluno <= 18) {
  categoria = "Adolescente";
} else if (idadeAluno >= 19 && idadeAluno<= 30) {
  categoria = "Adulto";
} else {
    categoria = "Não se encaixa em nenhuma categoria";
}

console.log("Categoria da turma: " + categoria);
