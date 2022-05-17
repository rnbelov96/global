export {};

const workMoreBtnElList = document.querySelectorAll('.js-work-more-btn');

workMoreBtnElList.forEach(el => {
  el.addEventListener('click', e => {
    const clickedBtn = e.currentTarget as HTMLButtonElement;
    const parrentBlockEl = clickedBtn.parentElement as HTMLUListElement;
    const textEl = clickedBtn.previousElementSibling as HTMLParagraphElement;
    clickedBtn.classList.add('visually-hidden');
    textEl.classList.add('work__item-text_opened');
    parrentBlockEl.classList.add('work__item_opened');
  });
});
