export {};

const workMoreBtnElList = document.querySelectorAll('.js-work-more-btn');

workMoreBtnElList.forEach(el => {
  el.addEventListener('click', e => {
    const clickedBtn = e.currentTarget as HTMLButtonElement;
    const parrentBlockEl = clickedBtn.parentElement as HTMLUListElement;
    const textEl = clickedBtn.previousElementSibling as HTMLParagraphElement;
    clickedBtn.classList.toggle('work__more-btn_opened');
    textEl.classList.toggle('work__item-text_opened');
    parrentBlockEl.classList.toggle('work__item_opened');
  });
});
