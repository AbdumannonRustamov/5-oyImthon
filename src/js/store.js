const counterEl = document.getElementById("counter");
let counter = 0;
document.getElementById("plus").addEventListener("click", () => {
    counter++;
    counterEl.textContent = counter;
});
document.getElementById("minus").addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        counterEl.textContent = counter;
    }
});