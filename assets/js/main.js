const mainImg = document.querySelector(".img-main")
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains("img-click")){
        mainImg.src = e.target.src
    }
 })