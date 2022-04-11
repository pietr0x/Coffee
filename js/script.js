const OPEN_BUTTON = document.querySelector('.open-modal');
const CLOSE_BUTTON = document.querySelector('.close-modal');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
modal.close();
}

OPEN_BUTTON.addEventListener('click', openModal);
CLOSE_BUTTON.addEventListener('click', closeModal);