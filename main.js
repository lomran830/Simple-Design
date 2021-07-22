let currentItem   = Array.from(document.querySelectorAll(".carsoul-container .item")),
    currentCaption=Array.from(document.querySelectorAll(".carsoul-container .item .caption")),
    currentSlider = 0,
    nextButton    = document.getElementById("next"),
    prevButton    = document.getElementById("prev"),
    listMenu      = document.getElementById("menu"),
    menu          = document.getElementById("menu-right"),
    searchInput   = document.getElementById("search"),
    item          = document.getElementById("menuitem"),
    listItem      = document.querySelector(".carsoul-container .listMenu"),
    close         = document.querySelector(".carsoul-container .close")


/* Remove  Active From All Classes */
    function removeAllActive(){
      currentItem.forEach(elem => {
        elem.classList.remove("active");

      });
      currentCaption.forEach(elem => {
        elem.classList.remove("active");

      });
    }
    /* Add Active To current Slider */
    let addActive = () => {
      removeAllActive();
      currentItem[currentSlider].classList.add('active');
      currentCaption[currentSlider].classList.add('active');


    }
    /* If Current Slider Is The last, Then Restart carsoul */
    let add = ()=>{

       currentSlider = 0;
      addActive();

    }
        /* If Current Slider Is The First, Then Restart carsoul from last to first */
    let remove = ()=>{
       currentSlider = currentItem.length-1;
      addActive();

    }


addActive();
/* Click to go to next slide */
nextButton.onclick = ()=>{
currentSlider == currentItem.length-1 ?  add(): currentSlider++; addActive();
}
/* Click to go to previous slide */
prevButton.onclick = ()=>{
currentSlider == 0 ?  remove(): currentSlider--; addActive();
}


/*  show the menu form right to left */
/* click the icon to show  the menu*/
listMenu.onclick = () =>{
    menu.classList.add("width");

}
/* click the icon x to hide  the menu*/
menu.childNodes[1].onclick = () => {
menu.childNodes[1].parentElement.classList.remove("width");
}



/* remove placeholder from input on focus */

searchInput.onfocus = function(){
    'use strict';
  this.setAttribute("data-place",this.getAttribute("placeholder"));
  this.setAttribute("placeholder","");
}
/* add placeholder in input on blur*/

searchInput.onblur = function(){
  'use strict';
  this.setAttribute("placeholder",this.getAttribute("data-place"));
  this.setAttribute("data-place","");
}

item.onclick = function () {
  'use strict';
  listItem.style.display="block";
  listItem.style.height="100vh";
}
close.onclick = function () {
    'use strict';
    listItem.style.height = "0";
    listItem.style.display = "none";
  }
