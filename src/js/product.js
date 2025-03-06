import { fetchData } from "./fechData.js";
import { showProduct } from "./updateUI.js";
import "./dark-mode.js";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

let singleData;

const title = document.querySelector(".product-title");
const img = document.querySelector(".product-img");
const description = document.querySelector(".product-description");
const price = document.querySelector(".product-price strong");
const discountPercentage = document.querySelector(".product-discount span");
const productRating = document.querySelector(".product-rating span");
const productReviews = document.querySelector(".product-reviews span");

fetchData("https://dummyjson.com/products/" + id)
  .then((product) => {
    showProduct(product);
    singleData = product;
    title.textContent = singleData.title;
    img.setAttribute("src", singleData.thumbnail);
    description.textContent = singleData.description;
    discountPercentage.textContent = `${singleData.discountPercentage}%`;
    price.textContent = `$${singleData.price}`;
    productRating.textContent = singleData.rating;
    productReviews.textContent = singleData.reviews;

    console.log(singleData);
  })
  .catch((error) => {
    console.log(error);
  });
