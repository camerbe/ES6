const box =document.querySelector(".box");
const enlargeImage=()=>{
   
    let first="opening";
    let second ="open";

    if(box.classList.contains(first)){
        first="open";
        second ="opening";
    }
    box.classList.toggle(first)

    
    setTimeout(()=>{
        box.classList.toggle(second);
    }, 300)
    
    
}
box.addEventListener('click',function(){
    enlargeImage();
})
//console.log(box);
// enlargeImage()=>box.classList.value="box opening";

// function enlargeImage(){
//     box.classList.value="box opening";
//     setTimeout(()=>{
//         box.classList.value="box open opening";
//     }, 3000)
    
// }
