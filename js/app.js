const buttonUp = document.querySelector("#button-up");

buttonUp.addEventListener("click", backToTop);
document.addEventListener('scroll', scrollFunction);

window.addEventListener('resize', ()=>{
  
})

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function menuResponsive(menu) {
  if(window.innerWidth < 992) {
    
  }
} 
