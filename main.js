// jaavscript files 
const btn = document.querySelector(".btn");
const jokes = document.querySelector(".jokes");
const img = document.querySelector(".container img");

//const url = "https://api.icndb.com/jokes/random?limitTo=[explicit]escape=javascript";

const url = "https://api.icndb.com/jokes/random?escape=javascript";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  //img.classList.add("image-shaker"); if you don't want to show image shakes

  img.classList.add("image-shaker");
  // change to data
  const {
    value: { joke },
  } = data;
  jokes.textContent = joke;
  const random = Math.random() * 2000;
  setTimeout(() => {
    img.classList.remove("image-shaker");
  }, random);
}
