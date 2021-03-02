//exemple
const nombres=[10,20,30,40,50];
const somme=nombres.reduce(function(somme,item){
    return somme+item
},0)
console.log(somme);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const sommefruit=fruitBasket.reduce(function(panier,item){
    
    panier[item]=(panier[item] || 0)+1;
    return panier;

    //sommefruit.fruit=item;
},{});
console.log(sommefruit);


const parenthese=")(";
function countParenthesis(parenthese){
    
    const result=  parenthese.split('').reduce(function(somme,item){
        
        somme[item]=(somme[item] || 0)+1;
        return somme;
    },[])
    return result['(']===result[')'];
 
}

console.log(countParenthesis(parenthese));

