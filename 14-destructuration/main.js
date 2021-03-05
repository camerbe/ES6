const person={
    first:"Gilles",
    last:"Bertrand",
    country:"Belgium",
    city:"Hyon",
    tweeter:"@camer"
}
//Destructuration

const {first,last,tweeter}=person;
console.log(`first ${first}`)

const user={
    firstname:"Anissa",
    lastname:"Belkheir",
    adress:{
        street:"rue du chamberlan",
        city:"Mons"
        
    },
    social:{
        website:"anissabelkheir.be",
        instagram:"anissabelkheir"
    },
    hobbies:["photo","impro","jardinage","couture"],
    parcours:["Bervoets","EII","UNDP","Technocité"]

}
//exo-1 Destructuration
const{firstname,lastname}=user;
console.log(firstname,lastname);
//exo-2 Destructuration
const{website,instagram}=user.social;
console.log(website,instagram);
//exo-3 Destructuration
const{firstname:fn,street,city,country}=user.adress;
console.log(firstname,street,city,country);
//exo-4
const recettes = [
    {
    id: 1,
    name: "Tiramisu",
    difficulty: 2,
    ingredients: ["amaretto", "mascarpone", "sucre", "boudoir", "café", "cacao"]
    },
    {
    id: 2,
    name: "Tartiflette",
    difficulty: 2,
    ingredients: ["lardons", "reblochon", "pommes de terre", "oignons"]
    },
    {
    id: 3,
    name: "Pâtes bolo",
    difficulty: 3,
    ingredients: ["spaghettis", "tomates", "oignons", "gruyère râpé", "viande hâchée"]
    },
    {
    id: 4,
    name: "Donus fourré crème anglaise avec nappage chocolat guanduja",
    difficulty: 5,
    ingredients: ["farine", "sucre", "oeufs", "levure", "chocolat"]
    },
   ]
   
  const shoppingListe = recettes.reduce(function(arr,el){
      
      el.difficulty===2? arr.push(...el.ingredients):''
      return arr
  },[])
  
  console.log(shoppingListe)

