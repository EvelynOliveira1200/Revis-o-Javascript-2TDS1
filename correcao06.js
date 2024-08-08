let armas = ["Mísseis Viper-X", "Laminas-Nanocarbonos","Lança-Gancho-Relâmpago", "Flechas-Sônicas", "Canhão" ]
let ataques = []


ataques.push("Tyrantron");
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for(let i = 0; i < ataques.length; i++){
    if(i == 0){
        console.log("Nome do Robô:" + ataques[i])
    }else{
    console.log("Ataque", i + 1 + ": " + ataques[i])
    }
}