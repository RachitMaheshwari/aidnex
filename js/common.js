// Navbar expand shrink
const navbar=document.querySelector('.navbar');
let scroll = window.scrollY;
window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
    if(scroll>100){
    	navbar.style.padding="0 0"
    }else{
    	navbar.style.padding="10px 0"
    }
});
if(scroll>100){
   navbar.style.padding="0 0"
}
// Navbar expand shrink


// form close button
document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.toggle-form').style.display="none";
})
const formContainer=document.querySelector('.toggle-form');
const form1=document.querySelector('.toggle-form form');

form1.addEventListener('click', function(event){
  event.stopPropagation();
  if(event.target.classList.contains("form-submit")){
    for (const el of form1.querySelectorAll("[required]")) {
      if (!el.reportValidity()) {
        return;
      }
      
    }
  }
})
formContainer.addEventListener('click', function(event){
  formContainer.style.display="none";
})
// form close button


// all form open buttons
let openForm=document.querySelectorAll('.openForm');
openForm.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.toggle-form').style.display="flex";
  });
});
// all form open buttons


// Nav links active
let navlinks=document.querySelectorAll('.nav-link');
navlinks.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.nav-link.active').classList.remove("active");
    button.classList.add("active")
  });
});
// Nav links active




  
  

