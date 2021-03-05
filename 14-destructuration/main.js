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