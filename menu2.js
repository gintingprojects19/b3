const menu = document.getElementById("menu");
const openMenu = document.getElementById("list-menu");
menu.textContent="Menu";
const ms = document.getElementById("ms");
const openMs = document.getElementById("open-ms");
menu.addEventListener("click", event =>{

    if(openMenu.style.display==="none"){
       openMenu.style.display="block";
        menu.textContent="Close";
       }else{
       openMenu.style.display="none";
        menu.textContent="Menu";
       }
/*    menu.textContent="Close";
    openMenu.style.display="none";
   
    menu.style.color="white";
    menu.style.textAlign="center";
    menu.style.fontSize="16pt";*/

})
/*openMenu.style.display="none";
menu.textContent="Show";
menu.style.color="white";
menu.style.textAlign="center";
menu.style.fontSize="16pt";*/
cls.addEventListener("click", event=>{
    openMenu.style.display="none";
})
