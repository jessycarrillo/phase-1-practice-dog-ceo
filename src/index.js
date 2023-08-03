console.log('%c HI', 'color: firebrick')

// adds image elements to the DOM for each 🤔 image in the array

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
function fetchAndDisplayDogImages() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogImages = data.message; 
        const imageContainer = document.querySelector("#dog-image-container");
        dogImages.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imageContainer.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error("Error fetching dog images:", error);
    });
}

fetchAndDisplayDogImages();

//Adds the breeds to the page in the <ul>
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedsNames = []

function addBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breedsNames = Object.keys(data.message);
      let breedsContainer = document.querySelector("#dog-breeds");
      breedsNames.forEach(breedName => {
        const breedElement = document.createElement("li");
        breedElement.textContent = breedName; 
        breedsContainer.appendChild(breedElement);
      });
    })
    .catch(error => {
      console.error("Error fetching breeds:", error);
    });
}

addBreeds();

//Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

const li = document.getElementById('dog-breeds');

li.addEventListener('click', function onClick(event) {
event.target.style.color = 'salmon';
});

// add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown
const dropdownMenu = document.querySelector("#breed-dropdown");
dropdownMenu.addEventListener("change", (event) => {
  const filteredBreed = breedsNames.filter(breed => breed.startsWith(event.target.value));
  let breedsContainer = document.querySelector("#dog-breeds");
  breedsContainer.innerHTML = "";
  filteredBreed.forEach(breedName => {
    const breedElement = document.createElement("li");
    breedElement.textContent = breedName; 
    breedsContainer.appendChild(breedElement);
  });
});