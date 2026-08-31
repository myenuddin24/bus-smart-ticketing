// scroll down
function scrollDown() {
  document.getElementById("seat-booking").scrollIntoView({
    behavior: "smooth",
  });
}

// select seat
const seatBtns = document.getElementsByClassName("seat-btn");
let count = 0;
for (const seatBtn of seatBtns) {
  seatBtn.addEventListener("click", function (event) {
    // alert for selecting more than 4 seats.
    count = count + 1;
    if (count > 4) {
      alert("You cannot select more than 4 seats.");
      return;
    }

    // seat btn style
    event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "white";
    event.target.setAttribute("disabled", true);

    // calculate the remaining seats
    const totalSeat = getElementValueById("total-seat");
    const remainingSeat = totalSeat - 1;
    setElementValueById("total-seat", remainingSeat);

    // count the selected seats
    const seatCount = getElementValueById("seat-count");
    const countedSeat = seatCount + 1;
    setElementValueById("seat-count", countedSeat);

    // create 3 "p" tags and set their innerText.
    const seatNumber = event.target.innerText;
    const p = createHtmlElement("p", seatNumber);
    const p1 = createHtmlElement("p", "Economoy");
    const p2 = createHtmlElement("p", 550);

    // create a "div" and append all the "p" tags to it.
    const seatDiv = document.createElement("div");
    seatDiv.classList.add("flex", "justify-between", "items-center");
    seatDiv.appendChild(p);
    seatDiv.appendChild(p1);
    seatDiv.appendChild(p2);

    // append the created "div" to the main div.
    const selectedSeat = document.getElementById("selected-seat");
    selectedSeat.appendChild(seatDiv);

    // calculate the total price
    calculateAndSetThePrice("total-price");

    // calculate the grand total
    calculateAndSetThePrice("grand-total");
  });
}

// coupon section
const inputCoupon = document.getElementById("input-coupon");
const applyCoupon = document.getElementById("apply-coupon");

inputCoupon.addEventListener("keyup", function (event) {
  if (event.target.value.trim() !== "") {
    applyCoupon.disabled = false;
  } else {
    applyCoupon.disabled = true;
  }
});

applyCoupon.addEventListener("click", function () {
  if (inputCoupon.value.trim() === "NEW15") {
    calculateDiscountAndUpdateThePrice("grand-total", 0.15);
  } else if (inputCoupon.value.trim() === "Couple20") {
    calculateDiscountAndUpdateThePrice("grand-total", 0.2);
  } else {
    alert("Please enter a valid coupon code.");
    return;
  }

  const couponSection = document.getElementById("coupon-section");
  couponSection.classList.add("hidden");
});
