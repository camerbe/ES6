var users=[
    {id:1,admin:true},
    {id:1,admin:false},
    {id:1,admin:false},
    {id:1,admin:false},
    {id:1,admin:true}
]
const admins=users.filter(function(el){
    return el.admin;
})
//console.log(admins)
function getEventNumbers(){
    const tmpArr=[];
    for(let i=0;i<9;i++){
        tmpArr.push(Math.round(Math.random()*10))
    }
    
    return tmpArr.filter(function(el){
        return el%2===0;
    })
}
//console.log(getEventNumbers());
const produits = [
    { nom : "Courgette", type : "légume", provenance : "Espagne"},
    { nom : "Pomme", type : "fruit", provenance : "Hollande" },
    { nom : "Salade", type : "légume", provenance : "Espagne" },
    { nom : "Poireau", type : "légume", provenance : "Hollande" },
    { nom : "Poire", type : "fruit", provenance : "Belgique" },
    { nom : "Fraise", type : "fruit", provenance : "Espagne" },
    { nom : "Choux-fleur", type : "légume", provenance : "Belgique" }
   ];
function searchProduit(array,type,provenance){
    const isType=type.length>0;
    const isProvenance=provenance.length>0;
    
    if(isType && isProvenance)
    {

        return array.filter(function(el){
            return el.type==type && el.provenance==provenance;
        });
    }
    if(isType) {
        return array.filter(function(el){
            return el.type==type ;
         });
    }
    else{
        return array.filter(function(el){
            return el.provenance==provenance 
         })  
    }


}
console.log(searchProduit(produits,'','Belgique'));
const pelemes=['toto',5,'Bruxelles','Mons',8,14,'Chaeleroi']

function mutiplie(array,multiplier)
{
    return array.filter(function(el){
        return (typeof el)=='number'
    }).map(function(el){
        return el*multiplier
    })
}
console.log(mutiplie(pelemes,5))