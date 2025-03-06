import { fetchData } from "./fechData.js"
import { showProduct } from "./updateUI.js";
import "./dark-mode.js"; 



const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

let singleData

const title = document.querySelector(".card-title")
const img = document.querySelector(".img")
const description = document.querySelector("#description")


fetchData("https://dummyjson.com/products/" + id) 
.then((product)=>{
    showProduct(product);
    singleData = product
    title.textContent = singleData.title
    img.setAttribute("src", singleData.thumbnail)
    description.textContent()
    console.log(singleData);

}).catch((error)=>{
    console.log(error);
})

