const lis=Array.from(document.querySelectorAll("li"));

const filtre=lis.filter(el => el.innerText==="Flexbox Video")
                .reduce((temps,el,index)=>{
                    temps[index]=el.getAttribute('data-time')
                    return temps
                    
                },[])
                .map((el)=>{
                    let arrSplit=el.split(":");
                    return Number(arrSplit[0])*60+Number(arrSplit[1]);
                })
                .reduce((somme,el)=>{
                    return somme+=el;
                },0)

const sect=document.getElementById("sec");
const para=document.createElement("h2")
const innerPara=document.createTextNode(`Total en Seconde : ${filtre}`)
para.appendChild(innerPara)
sect.appendChild(para)

// const filtre=lis.filter(el => el.innerText==="Flexbox Video")
// const filtre=lis.filter(function(el){
//     return el.innerText==="Flexbox Video";
// })
// const dataTimes=filtre.reduce(function(temps,el,index){
//     temps[index]=el.getAttribute('data-time')
//     return temps
    
// },[])
// const secondes=dataTimes.map(function(el){
//     let arrSplit=el.split(":");
//     return Number(arrSplit[0])*60+Number(arrSplit[1]);
// })
// const total=secondes.reduce(function(somme,el){
//     return somme+=el;
// },0)
// console.log(total);
