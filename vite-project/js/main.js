import '../css/style.css'
import { vinyls } from './vinyl'
import { DOMSelectors } from './dom'



//accepts an array and pushes content onto HTML
 


function dis(cards){
    cards.forEach((vinyl)=> DOMSelectors.gallery.insertAdjacentHTML("beforeend", vinyl.card))
}
dis(vinyls)

//insert html card to get the actual card from vinyljs in
/* 
function populate (arr){
    arr.forEach((el)=> parent.insertAdjacentHTML(

    ))
} */

/*  filters()
function filters(){
    //selects all category buttons
    let buttons = document.querySelectorAll("#btn")
    //for each button we add click event handler
    buttons.forEach((btn) => btn.addEventListener("click", function(){
        //get button text to be used later
        let btn = btn.Rock.toLowerCase()
        //create new array by filtering items by category (the button clicked)
        let newArr = items.filter((Genre)=> Genre.type.includes(Rock))
        //remove all old cards
        document.querySelector(".parent").innerHTML = ""
        //passing in new filtered array to put cards on screen
        populate(newArr)
    }))};  */

   function clear_screen(){
    const element = document.querySelector(".gallery");
    element.innerHTML = ""
   };

   let buttons = document.querySelectorAll(".pop, .rock, .indie")

   buttons.forEach((btn)=> btn.addEventListener("click", function(){

    let vin = btn.textContent;
    let newarr = vinyls.filter((vinyl)=> vinyl.Genre === vin);
    clear_screen();
    dis(newarr);
   }));

   DOMSelectors.buttons.addEventListener("click", function(){
    clear_screen();
   dis(vinyls)
   })

   document.querySelector(".themebtn").addEventListener("click", function (){
    if (document.body.classList.contains("sea")){
        document.body.classList.add("forest");
        document.body.classList.remove("sea");
    } else {
        document.body.classList.add("sea");
        document.body.classList.remove("forest");
    }
   });