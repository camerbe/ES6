const peoples=document.querySelectorAll("p");
// people est une Node list et ne peut à
// son état actuel faire des map etc... dessus
const name=Array.from(peoples);

//Autre utilisation de Array.from
//Toutes les fonctions ont par défaut une espèce de liste nommée
//arguments

function sumAll()
{
    const params=Array.from(arguments)
    return params
}
console.log(sumAll([250,32,321,58,400,560]))