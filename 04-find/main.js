const users=[
    {id:1,name:"Gilles"},
    {id:2,name:"Anissa"},
    {id:3,name:"Stéphane"},
    {id:4,name:"Jean Pierre"},
    {id:5,name:"Mathurin"},
];
const user=users.find(function(item){
    return item.name==="Stéphane";
})
console.log(user);
//exo-1
const books = [
    { id: 1, title : "L'HTML sur le bout des doigts", author : 2},
    { id: 2, title : "Jongler avec le CSS", author : 2},
    { id: 3, title : "Comment je DEV en dormant", author : 1},
    { id: 4, title : "Le JS pour les nuls", author : 3}
];
const authors = [
    { id: 1, name: "Geoffrey Denys"},
    { id: 2, name: "Guillaume Danzin"},
    { id: 3, name: "Anissa Belkheir"}
   ];
function findAuthorById(authorid){
    return authors.find(function(item){
        return item.id===authorid;
    });
    
}
function findBookByAuthor(author){
    const arrTmp=[];
    const filteredbooks= books.filter(function(item){
        return item.author===author.id;
    }).forEach(function(el){
        let obj={};
        obj.el=el.id;
        obj.title=el.title;
        obj.author=el;
        arrTmp.push(obj);
    })
      
    return arrTmp;

}

const author=findAuthorById(2);
console.log(author);
console.log(findBookByAuthor(author));