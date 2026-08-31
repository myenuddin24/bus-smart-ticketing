// get the value from the element.
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const valueText = element.innerText;
  const value = parseInt(valueText);
  return value;
}

// set the value as innerText
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// create a new tag and set the innerText
function createHtmlElement(tagName, value) {
  const tag = document.createElement(tagName);
  tag.innerText = value;
  return tag;
}

// Calculate the main price.
function calculateAndSetThePrice(elementId) {
  const presentPrice = getElementValueById(elementId);
  const calculatedPrice = presentPrice + 550;
  setElementValueById(elementId, calculatedPrice);
}

// Calculate the discounted price and update the grand total.
function calculateDiscountAndUpdateThePrice(elementId, value) {
  const presentPrice = getElementValueById(elementId);
  const discountedPrice = presentPrice * value;
  const updatedPrice = presentPrice - discountedPrice;
  setElementValueById(elementId, updatedPrice);
}
