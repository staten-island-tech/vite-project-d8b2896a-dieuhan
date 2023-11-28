import '../css/style.css'
import { vinyls } from './vinyl'



//accepts an array and pushes content onto HTML
function populate (arr){
    arr.forEach((el)=> parent.insertAdjacentHTML(

    ))
}




function filters(){
    //selects all category buttons
    let buttons = document.querySelectorAll("#btn")
    //for each button we add click event handler
    buttons.forEach((btn) => btn.addEventListener("click", function(){
        //get button text to be used later
        let category = btn.textContect.toLowerCase()
        //create new array by filtering items by category (the button clicked)
        let newArr = items.filter((el)=> el.type.includes(category))
        //remove all old cards
        document.querySelector(".parent").innerHTML = ""
        //passing in new filtered array to put cards on screen
        populate(newArr)
    }))
}
