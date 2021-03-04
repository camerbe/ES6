const arr=["Bouneck","Baheten","Fogain","Bokoalepa"];
//La manière habituelle

const arr1=arr.map(function(item){
    return item+ " Jean Pierre";
})
console.log(arr1);
// Avec la flèche, il suffit d'enlever le mot funtion et mettre
// la flèche après les parenthèses de la function
const arr2=arr.map((item)=>{
    return item+ " Jean Pierre";
})
console.log(arr2);
// Lorsqu'on a un seul paramètre, on peut le sortir des paranthèses
const arr3=arr.map(item =>{
    return item+ " Jean Pierre";
})
console.log(arr3);
// Lorsqu'on a un seul paramètre, on peut le sortir des paranthèses
// Lorqu'on a en même temps un seul return, on peut l'ignorer
// Il faut aussi retirer les accolades
const arr4=arr.map(item =>item + "Jean Pierre");
console.log(arr4);


const race ="100m haies";
const winners=["Henri","Alfred","Josée"];

const  runners=winners.reduce((coureur,item,index)=>{
    let obj={}
    obj.position=++index;
    obj.name=item;
    obj.race=race;
    coureur.push(obj);
    return coureur;
},[])
console.log(runners);