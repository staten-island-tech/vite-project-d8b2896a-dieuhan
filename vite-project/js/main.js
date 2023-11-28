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

/* filters()
function filters(){
    //selects all category buttons
    let buttons = document.querySelectorAll("#btn")
    //for each button we add click event handler
    buttons.forEach((btn) => btn.addEventListener("click", function(){
        //get button text to be used later
        let category = btn.Rock.toLowerCase()
        //create new array by filtering items by category (the button clicked)
        let newArr = items.filter((el)=> Genre.type.includes(Rock))
        //remove all old cards
        document.querySelector(".parent").innerHTML = ""
        //passing in new filtered array to put cards on screen
        populate(newArr)
    }))
}; */