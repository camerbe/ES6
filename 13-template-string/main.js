const name="Monia"
const city="Tervuren"
//console.log("ma soeur habite")
console.log(`Ma soeur habite à ${city}`)
//Multiligne
let txt =`Je peux écrire des 
phrases sur plusieurs lignes
sans soucis....`

const person={
    name:'Gilles',
    job:'big boss',
    city:'Hyon',
    bio:'Jai fondé 3 boîtes et je code emberjs'
}
const markup=`
    <div class="person">
        <h2>${person.name}</h2>
        <h2>${person.job}</h2>
        <p>${person.city}</p>
        <p>${person.bio}</p>
    </div>
`
document.getElementById('demo').innerHTML=markup;

//boucle
const dogs=[
    {name:"snickers",age:2},
    {name:"sniulrockkers",age:8},
    {name:"sunny",age:1},
]
const markup2=`
    <ul>
        ${dogs.map(dog=>`<li>${dog.name} a ${dog.age*7} ans</li>`).join(" ")}
    </ul>
`
document.getElementById('demo').innerHTML=markup2;
//exo
const computers=[
    {name:'Apple',ram:16},
    {name:'IBM',ram:6},
    {name:'Tuexdo',ram:32}
]
const markup3=`
    <ul>
        ${computers.map(comp=>`<li>${comp.name} a ${comp.ram} Go de capacité</li>`).join(" ")}
    </ul>
`
document.getElementById('demo').innerHTML=markup3;

//exo -2
const songs = [
    {
        name: 'Dying to live',
        artist: 'Tupac',
        featuring: 'Biggie Smalls'
    },
    {
        name: "Star Academie 3",
        artist: "L'orange du marchand"
    },
    {
        name: "Metallica",
        artist : "Enter Sandman",
        featuring: "Chantal Goya"
    },
    {
        name: "Cannibal Corpse",
        artist : "Priest of Sodom",
        featuring: "Elton John"
    },
    {
        name: "TsukoG",
        artist : "Rise"
    },
   ]

   const markup4=`
        ${songs.map(song=>`<li>${song.name} -${song.artist} ${song.featuring ? `featuring : ${song.featuring}`:''} </li>`).join('')}
   `
   document.getElementById('demo').innerHTML=markup4;

   const beer ={
       name : "cuvée Trolls",
       brewery: "Dubuisson",
       keywords:['trouble','fruitée','sucrée','amère']
   }
   function renderKeyWords(keywords){
       return 
      
    `
        <ul>
            ${keywords.map(k => `<li>${k}</li>`).join('')}
        </ul>
       
       `
   }
   console.log(renderKeyWords(beer.keywords))
   const markup5= `
        <div class="beer">
            <h2>${beer.name}</h2>
            <p>${beer.brewery}</p>
            ${renderKeyWords(beer.keywords)}
        </div>
   `
   document.getElementById('demo').innerHTML=markup5;

   let links = [
    { texte: 'triptyk', link: "http://www.triptyk.eu" },
    { texte: 'technocite', link: "http://www.technocite.be" },
    { texte: 'ember', link: "https://www.emberjs.com/" },
    { texte: 'glimmer', link: "https://glimmerjs.com/" },
    
   ]


const anchors= (liens) =>`${links.map(lien => `<li><a href="${lien.link}">${lien.texte}</a></li>`).join('')}`

const markup6=`
        <div class="liens">
            <ul>
                ${anchors(links)}
            </ul>
        </div>
  `
  document.getElementById('demo').innerHTML=markup6;

  // Tag string
const dict={
    HTML:"Hyper text markup Language ",
    CSS:"Cascading style sheet",
    JS:"Javascript"
}

function addAbbreviations(strings, ...value){
    // const trouve=value.some((el) => el ==='toto')
    // console.log(trouve)
    debugger
    let str="";
    strings.forEach(function(item,idx){
        
        str+=` ${item} 
            ${value.some((el) => el ===dict[value[idx]]) ? `<abbr title="${dict[value[idx]]}">${value[idx]}</abbr>`: `${(value[idx] || '')}`}
        `
   })
   return str
}
const first = 'Wes';
const last = 'Bos';
const sentence = addAbbreviations`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'} and ${'JS'}`;
document.getElementById('demo').innerHTML=sentence;