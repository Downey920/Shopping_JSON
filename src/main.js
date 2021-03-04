"use strict";

// Load Data from JSON
function loadItems() {
  return fetch("data/data.json")
    .then(response => response.json())
    .then(json => json.items);
}

// Display Items on List
function displayItems(items) {
  list.innerHTML = items.map(item => createHTMLString(item)).join("");
}

// Array element to HTMlString
function createHTMLString(item) {
  return `<li class="item">
  <img src="${item.image}" alt="${item.type}" class="itemImg" />
  <span class="description">${item.sex}, ${item.size} size</span>
  </li>`;
}

// When take place a Click Event, Display filtering Items
function filterItems(items) {
  document.addEventListener("click", e => {
    const dataset = e.target.dataset;
    if (dataset.filter === undefined) return;

    const filterArr = items.filter(
      item =>
        dataset.filter === item.type ||
        dataset.filter === item.color ||
        dataset.filter === "*"
    );
    displayItems(filterArr);
  });
}

//Main
const list = document.querySelector(".items");
loadItems().then(items => {
  displayItems(items);
  filterItems(items);
});
