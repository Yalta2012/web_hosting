const menu_button = document.getElementById('menu_button');
const menu = document.getElementById('menu');
const box = document.getElementById("box");
const mask = document.querySelector(".mask");
const greytext = document.querySelector(".mid").querySelectorAll("p");
const blacktext=document.querySelectorAll(".mid > h1,h2");


menu_button.addEventListener("click",()=>
{
    menu.classList.toggle("menu_open");
})
//console.log(blacktext);
//console.log(greytext);
document.getElementById('darkthemecheckbox').addEventListener("click",()=>
{
    for (let i=0; i<blacktext.length;i++){
        blacktext[i].classList.toggle("darktheme_text")
    }
    for (let i=0; i<greytext.length;i++){
        greytext[i].classList.toggle("darktheme_text")
    }

    mask.classList.toggle("darktheme_mask");
    box.classList.toggle("darktheme_box");
    document.body.classList.toggle("darktheme");


})
