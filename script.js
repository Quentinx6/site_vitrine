document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementsByClassName("button");
    let cookies = document.getElementById("cookies");
    
    for(let but of button){
        but.addEventListener("click", () =>{
            cookies.classList.add("displayNone")
        })
    }

})