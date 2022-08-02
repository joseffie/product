const promoBtn = document.querySelector('.promo__form button');
const promoInput = document.querySelector('.promo__input');

promoInput.style.paddingRight = `${promoBtn.offsetWidth + 18}px`;

window.addEventListener('resize', () => {
  promoInput.style.paddingRight = `${promoBtn.offsetWidth + 18}px`;
});
