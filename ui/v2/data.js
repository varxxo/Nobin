async function getData() {
  console.log("get data")
  const url = "http://localhost:3000/dishes1";
  let response = await fetch(url);
 
    let dishes = await response.json();

    let container = document.querySelector('.cards');
    container.innerHTML = ''; 

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
  }
  

document.addEventListener('DOMContentLoaded', getData, false);