async function getData() {
  console.log("get data")
  const url = "http://localhost:3000/dishes1";

  let data = await fetch(url)
  let dishes = await data.json()

  let container = document.querySelector('.cards');

  for (let dish of dishes) {
    let div = document.createElement('div');
    div.className = 'card'
    div.innerHTML = `
      <img src="https://www.themanual.com/wp-content/uploads/sites/9/2021/05/how-to-make-the-perfect-milkshake.jpg?p=1">
      <p>Chocolate Milkshake</p>
      <p>A rich, creamy blend of smooth chocolate and cold milk, topped with whipped cream.</p>
    `
    container.append(div)
  }

}

document.addEventListener('DOMContentLoaded', getData, false);