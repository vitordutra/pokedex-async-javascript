const submitBtn = document.querySelector('button[type=submit]');
const pokemonNumber = document.querySelector('input[name="numero"]');

const createImgPlace = (imgPlace, imageURL) => {
  imgPlace.className = 'img-place';
  const img = document.createElement('img');
  img.setAttribute('src', imageURL);
  imgPlace.appendChild(img);
};

const clickSearchPokedexButton = async event => {
  
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber.value}`;

  const response = await fetch(url);
  const responseJSON = await response.json();

  const pokemonName = responseJSON.name.toUpperCase();
  const pokemonImageURL =
    responseJSON.sprites.other['official-artwork'].front_default;

  // Cria o lugar onde a imagem vai ficar
  const imgPlace = document.createElement('div');
  createImgPlace(imgPlace, pokemonImageURL);

  // Cria o título do Pokémon
  const title = document.createElement('h3');
  title.innerText = pokemonName;

  const newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.appendChild(imgPlace);
  newCard.appendChild(title);

  const main = document.querySelector('main');
  main.appendChild(newCard);
};

submitBtn.addEventListener('click', clickSearchPokedexButton);
