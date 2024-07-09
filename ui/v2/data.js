async function getData() {
  console.log("get data")
  const url = "http://localhost:3000/dishes1";

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let dishes = await response.json();

    let container = document.querySelector('.cards');
    container.innerHTML = ''; // Clear any existing content

    for (let dish of dishes) {
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <img src="${dish.url}" alt="${dish.name}">
        <p>${dish.name}</p>
        <p>${dish.descp}</p>
      `;
      container.append(div);
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

document.addEventListener('DOMContentLoaded', getData, false);
