function hexToRgb(color){
    if (/^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(color)){
        

        const arrtmp=splitHexa(color).reduce((tmpstr,el,idx)=>{
          return idx+1<splitHexa(color).length  ?  tmpstr+=parseInt(el,16)+',' :tmpstr+=parseInt(el,16);
        },"")
        return `rgb(${arrtmp})`
    }
}
function rgbToHex(color){
    const col=color.split(",");
    return col.reduce((tmpStr,el)=>{
        return tmpStr+parseInt(el).toString(16);
    },"")

}
function splitHexa(hexa){
    let strtmp="";
    let hexStr =hexa;
    let arrtmp=[];
    let cpt=0;
    let arrHexa =[];
    
    hexa.length===3 ? hexStr=hexStr.repeat(2):hexa.length===2?hexStr=hexStr.repeat(3):''
    
    const tmp = hexStr.split("").forEach(function(el){
        strtmp+=el;
        cpt++;
        if(cpt===2){
            arrtmp.push(strtmp) ;
            cpt=0;
            strtmp="";
        }
       
    });
    return arrtmp 
}
    const inputText=document.querySelector("#hextorgb").value;
function display(inputText,result){
    const dspResult=document.querySelector('.response');
    const p =document.createElement('p');
    p.innerHTML="";
    p.innerHTML=` ${inputText} =  ${result}`;
    dspResult.appendChild(p);
}

const btnhex2rgb=document.querySelector(".btnhextorgb")
const btnrgb2hex=document.querySelector(".btnrgbtohex")
btnhex2rgb.addEventListener("click",function(){
    
    const inputText=document.querySelector("#hextorgb").value;
    const result=hexToRgb(inputText);
    display(inputText,result)
});
btnrgb2hex.addEventListener("click",function(){
    debugger
    const inputText=document.querySelector("#rgbtohex").value;
    const result=rgbToHex(inputText);
    display(inputText,result)
});

