let quantidadePalmas = 5
let Palmas = ""

console.clear()

for(let i = 1; i <= quantidadePalmas; i++) { 
    Palmas += "👏";
    console.log('👏')
    if(i % 5 === 0){
    console.log("🎉")
}
}