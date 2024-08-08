let armas = ["Tyrantron","Mísseis Viper-X", "Laminas-Nanocarbonos","Lança-Gancho-Relâmpago", "Flechas-Sônicas", "Canhão" ]
let ataques = []

ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[5]);

for(let i = 0; i < ataques.length; i++){
    if(ataques[i] == armas[1]){
        console.log("Nome do Robô:" + armas[0])
    }
    console.log("Ataque", i + 1 + ": " + ataques[i])
}
