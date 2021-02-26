// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const doubleNumbers=numbers.map(function(number){
//     return number*2
// });

// doubleNumbers


let images = [
    { height: '34px', width: '67px', color: '#ff0032' },
    { height: '54px', width: '167px', color: '#ee0032' },
    { height: '74px', width: '267px', color: '#000032' },
    { height: '4px', width: '367px', color: '#cc0032' },
    { height: '94px', width: '667px', color: '#dd0032' }
   ];
//    const heights=images.map(function(obj){
//         return obj.height;
//    });
   
// const sentence=prompt("Entrez une phrase ");
// const arrSentence=sentence.split(' ');

// function swapCase(arr)
// {
//     let arrSwap= arr.map(function(el,index){
      
//         if(index%2)
//             return el.toUpperCase();
//         return el;
//     })
//     return arrSwap.join(' ');
// }
// const result=swapCase(arrSentence);
// console.log(result);

function tri(array,properties,returntype)
{
    
    switch(typeof properties)
    {
        
        case  'array':
        case  'object':    
            return createArrayOrArray(array,properties,returntype);
            break;
        case 'string':
            
            return createStringArray(array,properties);
            break;
        
    }
}
function createStringArray(array,properties){
    
    return array.map(function(el){
        
        return el[properties];
    })
}
function createArrayOrArray(array,properties,returntype)
{
    return array.map(function(el){
        
        return properties.forEach(function(innerEl){
            console.log(el[innerEl])
            return el[innerEl];
        })

    })
}
console.log(tri(images,['width','height'],'array'));
