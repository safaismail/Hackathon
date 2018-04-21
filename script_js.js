document.addEventListener("DOMContentLoaded", function() {
  let alertButton = document.querySelector(".alert-button");

  alertButton.addEventListener("click", function(event) {
    alert("Hey! You clicked me!");
  });

  let subButton = document.querySelector(".sub");
  let addButton = document.querySelector(".add");
  let displayCount = document.querySelector(".count");

  let count = 0;
  subButton.addEventListener("click", function(event) {
    count = count - 1;
    console.log(count);
    displayCount.innerHTML = count;
  });

  addButton.addEventListener("click", function(event) {
    count = count + 1;
    console.log(count);
    displayCount.innerHTML = count;
  });
});