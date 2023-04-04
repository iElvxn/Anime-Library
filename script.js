const animes = document.querySelector('.animes');
const openModalButtons = document.querySelectorAll('[data-modal-target');
const closeModalButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('#overlay');
const formSubmitBtn = document.querySelector('#add-button');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


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

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal);
        })
    })
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
