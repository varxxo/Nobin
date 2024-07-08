async function getData() {
  console.log("get data")
  const url = "http://localhost:3000/dishes1";

  let data = await fetch(url)
  console.log(await data.json())


}

document.addEventListener('DOMContentLoaded', getData, false);