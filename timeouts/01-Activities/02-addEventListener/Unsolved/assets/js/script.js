// TODO: Create a variable to hold the count
let count = 0;
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
const decrementbutton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
// TODO: Create a function that displays the current count on the page
const displayCount = (count) => alert(count);
// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
decrementbutton.addEventListener("click", (count) => {
    count--;
    displayCount(count);
});
incrementButton.addEventListener("click", function () {
    count++;
    displayCount(count);
});
// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
