let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search-alt-2");

searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search-alt-2", "bx-x");
    }else{
        searchBox.classList.replace("bx-x", "bx-search-alt-2");
    }
})