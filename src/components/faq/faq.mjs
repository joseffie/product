const faqAccordion = document.querySelectorAll('.faq__accordion-item');

for (let i = 0; i < faqAccordion.length; i++) {
  faqAccordion[i].addEventListener('click', function () {
    this.classList.toggle('_active');
  });
}
