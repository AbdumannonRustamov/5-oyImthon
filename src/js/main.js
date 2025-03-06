import "./dark-mode.js"


import { fetchData } from"./fechData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/product")
.then((data) => {
    showCards(data);
})
.catch((error) =>{
    console.log(error);
    
})


  setTimeout(function() {
    document.querySelector('.overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }, 5000);


