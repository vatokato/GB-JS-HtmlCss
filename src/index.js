import './styles/index.scss'

const priceButtons = [...document.querySelectorAll('.prices-btn')];
priceButtons.forEach(button =>
  button.addEventListener('click', e => alert(`Buy ${e.target.dataset.type}`))
);
