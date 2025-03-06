const template = document.querySelector("template");
const cardList = document.querySelector("#card-list");

const showCards = ({ products }) => {
    products.forEach((product) => {
        const { id, title, thumbnail, price, discountPercentage, rating, description, reviews } = product;

        const clone = template.content.cloneNode(true);

        const a = clone.querySelector('a');
        const img = clone.querySelector('img');
        const descriptionText = clone.querySelector('#description');
        const ratingText = clone.querySelector('.rating');
        const reviewText = clone.querySelector('.review');
        const priceText = clone.querySelector('.price');
        const priceWithDiscount = clone.querySelector('.price-with-discount');
        const buyBtn = clone.querySelector('.buy-btn');

        a.href  = `./product.html?id=${id}`;
        img.src = thumbnail;
        img.alt = title;

        descriptionText.textContent = description.substring(0, 50);
        ratingText.textContent = rating;
        reviewText.textContent = `${reviews.length} Reviews`;

        priceText.textContent = `$${price}`;
        priceWithDiscount.textContent = `$${(price - (price / 100) * discountPercentage).toFixed(2)}`;

        if (cardList) {
            cardList.appendChild(clone);
        } else {
            console.error("cardList element not found!");
        }
    });
};

export const showProduct = (product) =>{
    console.log(product);
    
}

export { showCards };
