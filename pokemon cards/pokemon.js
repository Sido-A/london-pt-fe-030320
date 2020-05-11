const POKEMON_URL = "https://api.pokemontcg.io/v1";
let pokemonNewArray = [];

const pokemonContainer = document.querySelector(".pokemonContainer");
const loading = document.createElement("p");
loading.classList.add("loading")
loading.innerText = "Loading..."
pokemonContainer.append(loading)

const renderPokemon = (pokemonNewArray) => {
  pokemonNewArray.forEach((pokemonArr) => {
    loading.remove();
    if (pokemonArr.hp == undefined) {
      pokemonArr.hp = "Not a pokemon"      
    }
    if (pokemonArr.types == undefined) {
      pokemonArr.types = "Unknown"      
    }

    if (pokemonArr.weaknesses == undefined) {
      pokemonArr.weaknesses = "Unknown"        
    } else {
      pokemonArr.weaknesses = pokemonArr.weaknesses[0].type      
    }

    const pokemon = document.createElement("div");
    pokemon.innerHTML = `
    <div class="pokemon">
      <div class="pokemonImg">
        <img src="${pokemonArr.imageUrl}" alt="No img">
      </div>
      <div class="details">
        <p class="number">Number: ${pokemonArr.number}</p>
        <p class="hp">HP: ${pokemonArr.hp}</p>
        <p class="types">Types: ${pokemonArr.types}</p>
        <p class="weaknesses">Weaknesses: ${pokemonArr.weaknesses}</p>
      </div>
      <div class="pokemonName">
        <p class="name">Name: ${pokemonArr.name}</p>
      </div>
      </div>
      `;
    pokemonContainer.append(pokemon);
  });
}

const pokemonInfo = async () => {
  const pokemonCardData = await getData();
  pokemonNewArray = pokemonCardData.map((pokemon) => {
    const { number, hp, imageUrl, name, types, weaknesses } = pokemon;
    return ({
      number,
      hp,
      imageUrl,
      name,
      types,
      weaknesses,
    });
  });
  renderPokemon(pokemonNewArray);
};

const getData = async () => {
  return await fetch(`${POKEMON_URL}/cards`)
    .then((res) => res.json())
    .then((res) => res.cards);
};

getData();
pokemonInfo();
