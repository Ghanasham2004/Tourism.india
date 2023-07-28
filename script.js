AOS.init({
  duration: 900,
});
let data = [
  {
    id: "1",
    name: "TAJMAHAL",
    tag: "Heritage",
    description:
      "Iconic white marble mausoleum in India. Taj Mahal: Symbol of love, built in 17th century by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    image: "tajmahal.jpg",
    status: "active",
  },

  {
    id: "2",
    name: "KERALA",
    tag: "WildlifeSanctuaries",
    description:
      "Enchanting Kerala: Backwaters, Tea Gardens, & Beaches! 🌴🚣‍♂️🍃 #GodsOwnCountry #India",
    image: "kerala.jpg",
    status: "",
  },
  {
    id: "3",
    name: "RED-FORT DELHI",
    tag: "Magnificent",
    description:
      "Historic Mughal marvel, UNESCO World Heritage Site. Iconic symbol of Indias rich past, featuring stunning architecture & grandeur.",
    image: "red-fort.jpg",
    status: "",
  },
  {
    id: "4",
    name: "MAHARASHTRA",
    tag: "PrideOfMaharashtra",
    description:
      "Majestic fort city in India, once capital of Maratha Empire. Rich history, stunning views, and Chhatrapati Shivajis legacy",
    image: "maharashtra.jpg",
    status: "",
  },
];

let cards_container = document.querySelector("#cards");
const renderData = () => {
  data.forEach(async (data) => {
    cards_container.innerHTML += loadData(data);
    if (data.status == "active") {
      document.querySelector("#top").innerHTML = getSectionTop(data);
      document.getElementById("bg-image").src = `./images/${data.image}`;
    }
  });
};

function displayInfo(e) {
  document.querySelector("#cards .active").classList.toggle("active");
  e.classList.add("active");
  let data_id = e.id;
  const newData = data.find((arr) => arr.id == data_id);
  document.querySelector("#top").innerHTML = getSectionTop(newData);
  document.getElementById("bg-image").src = `./images/${newData.image}`;
}

// ======================================== Dynamic Loading ==================================
function getSectionTop(data) {
  return `
  <img src="./images/${data.image}" alt=""  >
  <div class="info" data-aos="fade">
      <p class="decore">${data.tag}</p>
      <h2>${data.name}</h2>
      <p class="description">${data.description} </p>
  </div>
    `;
}

function loadData(data) {
  return `
    <div class="card ${data.status}" id="${data.id}" onclick="displayInfo(this)" >
        <img src="./images/${data.image}" alt="">
        <div class="about-dest">
            <p class="decore">${data.tag}</p>
            <h2>${data.name}</h2>
        </div>
    </div>
    `;
}
