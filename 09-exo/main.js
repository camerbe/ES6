const posts = [
    { id:1, title :'Accueil', content:'Accueil Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto, quos, harum odit voluptatum omnis deleniti nisi sapiente doloremque quas voluptatem! Eaque reprehenderit rerum ea, asperiores nesciunt quos magni voluptate.'},
    { id:2, title :'Présentation', content:'Présentation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus itaque est velit vel, qui aliquid sit corporis odio facere at porro architecto perferendis commodi dolores fugiat officia. Ea, laboriosam!'},
    { id:3, title :'Projets', content:'Projets Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus placeat labore nam saepe tenetur enim rem, nesciunt accusamus, quisquam exercitationem vitae nulla obcaecati quibusdam quaerat deleniti, consectetur quod odit doloribus.'},
    { id:4, title :'Galerie', content:'Galerie Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
    { id:5, title :'Contact', content:'Contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos incidunt sunt voluptate repudiandae illo, non blanditiis dolor veritatis quaerat laudantium molestiae corrupti asperiores numquam esse quo doloremque explicabo molestias rem?'},
   ];

   const postList=document.getElementById("post_list");
   const postDetail=document.getElementById("post_detail");
   const onCharge=()=>{
        posts.forEach((el)=>{
            let li=document.createElement("li");
            li.innerText=el.title
            li.addEventListener('click',function(){
                postDetail.innerText=el.content;
            })
            postList.appendChild(li);
        })
}
   window.addEventListener('DOMContentLoaded',onCharge);

   
   