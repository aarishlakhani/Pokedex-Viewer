const pokemon = [
  "",
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
];
const num = [
  "",
  "#001",
  "#002",
  "#003",
  "#004",
  "#005",
  "#006",
  "#007",
  "#008",
  "#009",
  "#010",
  "#011",
  "#012",
  "#013",
  "#014",
  "#015",
  "#016",
  "#017",
  "#018",
  "#019",
  "#020",
  "#001",
  "#001",
];
const fastMove1 = [
  "",
  "Tackle",
  "Razor Leaf",
  "Razor Leaf",
  "Ember",
  "Ember",
  "Fire Spin",
  "Tackle",
  "Bite",
  "Bite",
  "Tackle",
  "Tackle",
  "Struggle Bug",
  "Bug Bite",
  "Bug Bite",
  "Infestation",
  "Tackle",
  "Wing Attack",
  "Air Slash",
  "Tackle",
  "Bite",
];
const fastMove2 = [
  "",
  "Vine Whip",
  "Vine Whip",
  "Vine Whip",
  "Scratch",
  "Fire Fang",
  "Air Slash",
  "Bubble",
  "Water Gun",
  "Water Gun",
  "Bug Bite",
  "Bug Bite",
  "Confusion",
  "Poison Sting",
  "Poison Sting",
  "Poison Jab",
  "Quick Attack",
  "Steel Wing",
  "Steel Wing",
  "Quick Attack",
  "Quick Attack",
];
const weatherType1 = [
  "",
  "Clear",
  "Clear",
  "Clear",
  "Clear",
  "Clear",
  "Clear",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Partly Cloudy",
  "Partly Cloudy",
  "Partly Cloudy",
  "Partly Cloudy",
  "Partly Cloudy",
];
const weatherType2 = [
  "",
  "Cloudy",
  "Cloudy",
  "Cloudy",
  "N/A",
  "N/A",
  "Windy",
  "N/A",
  "N/A",
  "N/A",
  "N/A",
  "N/A",
  "Windy",
  "Cloudy",
  "Cloudy",
  "Cloudy",
  "Windy",
  "Windy",
  "Windy",
  "N/A",
  "N/A",
];

const div = document.createElement("div");
const ul = document.createElement("ul");
div.id = "createDivision";
ul.id = "listItems";

var nodeList = document.querySelectorAll("li");
alert(nodeList.length);

function displayName() {
  while (document.getElementById("listItems").firstChild) {
    document
      .getElementById("listItems")
      .removeChild(document.getElementById("listItems").firstChild);
  }
}

//name and number search bar code
function nameSearch() {
  let pokemonName = document.getElementById("search1").value;
  let result = "";
  let pokemonCounter = 0;

  if (pokemonName.length > 20) {
    alert("Inavalid Search. Please try again.");
  } else {
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].toLowerCase().includes(pokemonName.toLowerCase())) {
        result +=
          pokemon[i] +
          " (" +
          i +
          ") Weather Types: " +
          weatherType1[i] +
          "|" +
          weatherType2[i] +
          "Fast Moves: " +
          fastMove1[i] +
          "|" +
          fastMove2[i] +
          "\n";
        pokemonCounter++;
      }

      if (pokemonCounter > 4) {
        break;
      }
    }
  }

  if (pokemonCounter == 0) {
    alert("Try Againn");
  } else {
    alert(result);
  }
}

function numSearch() {
  let pokemonId = document.getElementById("search2").value;
  let result = "";
  let pokemonCounter = 0;

  if (pokemonId.length > 20) {
    alert("Invalid search. Please try again.");
  } else {
    for (let i = 1; i < pokemon.length; i++) {
      if (num[i].includes(pokemonId)) {
        result +=
          pokemon[i] +
          " (" +
          num[i] +
          ") Weather Types: " +
          weatherType1[i] +
          "|" +
          weatherType2[i] +
          "Fast Moves: " +
          fastMove1[i] +
          "|" +
          fastMove2[i] +
          "\n";
        pokemonCounter++;
      }

      if (pokemonCounter > 4) {
        break;
      }
    }

    if (pokemonCounter == 0) {
      alert("Pokemon with this number does not exist. Try again.");
    } else {
      alert(result);
    }
  }
}
