const animes = document.querySelector('.animes');
const addAnimeBtn = document.querySelector('#add-book-button');
const addAnimeModal = document.getElementById('addAnimeModal');
const formSubmitBtn = document.querySelector("#add-button");

let myLibrary = [];

class Anime{
    constructor(title, studio, episodes, completed){
    this.title = title;
    this.studio = studio;
    this.episodes = episodes;
    this.completed = completed;
    }
}

formSubmitBtn.addEventListener('click', addAnimeToLibrary);

function getAnimeFromInput() {
    const title = document.getElementById('title').value;
    const studio = document.getElementById('studio').value;
    const episodes = document.getElementById('episodes').value;
    const completed = document.getElementById('isCompleted').checked;
    return new Anime(title, studio, episodes, completed);
  }

function addAnimeToLibrary() {
    event.preventDefault();
    let anime = getAnimeFromInput();
    myLibrary.push(anime);
    displayAnimes()

}

function displayAnimes() {
    myLibrary.forEach(animeInArray =>{
        const card = document.createElement('div');
        card.classList.add('card');
        animes.appendChild(card);

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('info');
        cardTitle.innerHTML = animeInArray.title;
        card.appendChild(cardTitle);

        const cardStudio = document.createElement('div');
        cardStudio.classList.add('info');
        cardStudio.innerHTML = 'Studio: ' + animeInArray.studio;
        card.appendChild(cardStudio);

        const cardEpisodes = document.createElement('div');
        cardEpisodes.classList.add('info');
        cardEpisodes.innerHTML = 'Episodes: ' + animeInArray.episodes;
        card.appendChild(cardEpisodes);

        const cardCompleted = document.createElement('div');
        cardCompleted.classList.add('info');
        cardCompleted.innerHTML = animeInArray.completed;
        card.appendChild(cardCompleted);

    })
}
