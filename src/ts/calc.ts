/* eslint-disable no-param-reassign */
export {};

enum Tab {
  CLIENT,
  STOCK,
}

const rangeElList = document.querySelectorAll('.calc__input');

const b2gRange = document.querySelector('.js-b2g-range') as HTMLInputElement;
const b2bRange = document.querySelector('.js-b2b-range') as HTMLInputElement;
const b2cRange = document.querySelector('.js-b2c-range') as HTMLInputElement;
const clothesRange = document.querySelector(
  '.js-clothes-range',
) as HTMLInputElement;
const shoesRange = document.querySelector(
  '.js-shoes-range',
) as HTMLInputElement;
const protectRange = document.querySelector(
  '.js-protect-range',
) as HTMLInputElement;

let b2gRangeResult: number;
let b2bRangeResult: number;
let b2cRangeResult: number;
let clothesRangeResult: number;
let shoesRangeResult: number;
let protectRangeResult: number;
let clientResult: number;
let stockResult: number;

const b2gRangeResultLabelEl = document.querySelector(
  '.js-b2g-result',
) as HTMLSpanElement;
const b2bRangeResultLabelEl = document.querySelector(
  '.js-b2b-result',
) as HTMLSpanElement;
const b2cRangeResultLabelEl = document.querySelector(
  '.js-b2c-result',
) as HTMLSpanElement;
const clothesRangeResultLabelEl = document.querySelector(
  '.js-clothes-result',
) as HTMLSpanElement;
const shoesRangeResultLabelEl = document.querySelector(
  '.js-shoes-result',
) as HTMLSpanElement;
const protectRangeResultLabelEl = document.querySelector(
  '.js-protect-result',
) as HTMLSpanElement;

const tabBoxEl = document.querySelector('.calc__tab-box') as HTMLDivElement;
const clientTabEl = document.querySelector('.js-client-tab');
const stockTabEl = document.querySelector('.js-stock-tab');
let currentTab = Tab.CLIENT;

const clientBoxEl = document.querySelector('.js-client-box') as HTMLDivElement;
const stockBoxEl = document.querySelector('.js-stock-box') as HTMLDivElement;

const phoneResultLabelEl = document.querySelector(
  '.js-phone-result',
) as HTMLSpanElement;
const clientResultLabelEl = document.querySelector(
  '.js-client-result',
) as HTMLSpanElement;
const stockResultLabelEl = document.querySelector(
  '.js-stock-result',
) as HTMLSpanElement;

const setPhoneResult = (tab: Tab) => {
  switch (tab) {
    case Tab.CLIENT:
      phoneResultLabelEl.textContent = clientResult.toLocaleString();
      break;

    case Tab.STOCK:
      phoneResultLabelEl.textContent = stockResult.toLocaleString();
      break;

    default:
      phoneResultLabelEl.textContent = '1';
  }
};
const calcResult = () => {
  b2gRangeResult = Number(b2gRange.value) * 10000 * 0.16;
  b2gRangeResultLabelEl.textContent = b2gRangeResult.toLocaleString();

  b2cRangeResult = Number(b2cRange.value) * 10000 * 0.16;
  b2cRangeResultLabelEl.textContent = b2cRangeResult.toLocaleString();

  b2bRangeResult = Number(b2bRange.value) * 10000 * 0.16;
  b2bRangeResultLabelEl.textContent = b2bRangeResult.toLocaleString();

  clothesRangeResult = Number(clothesRange.value) * 4000 * 0.16;
  clothesRangeResultLabelEl.textContent = clothesRangeResult.toLocaleString();

  shoesRangeResult = Number(shoesRange.value) * 4000 * 0.16;
  shoesRangeResultLabelEl.textContent = shoesRangeResult.toLocaleString();

  protectRangeResult = Number(protectRange.value) * 4000 * 0.16;
  protectRangeResultLabelEl.textContent = protectRangeResult.toLocaleString();

  clientResult = b2gRangeResult + b2cRangeResult + b2bRangeResult;
  stockResult = shoesRangeResult + clothesRangeResult + protectRangeResult;

  clientResultLabelEl.textContent = clientResult.toLocaleString();
  stockResultLabelEl.textContent = stockResult.toLocaleString();

  setPhoneResult(currentTab);
};

calcResult();

tabBoxEl.addEventListener('click', e => {
  const clickedEl = e.target as HTMLDivElement;
  if (!clickedEl.classList.contains('calc__tab')) {
    return;
  }

  if (clickedEl.classList.contains('calc__tab_active')) {
    return;
  }

  if (clickedEl.classList.contains('js-client-tab')) {
    clientTabEl?.classList.add('calc__tab_active');
    stockTabEl?.classList.remove('calc__tab_active');
    clientBoxEl.classList.remove('visually-hidden');
    stockBoxEl.classList.add('visually-hidden');
    currentTab = Tab.CLIENT;
  } else {
    stockTabEl?.classList.add('calc__tab_active');
    clientTabEl?.classList.remove('calc__tab_active');
    clientBoxEl.classList.add('visually-hidden');
    stockBoxEl.classList.remove('visually-hidden');
    currentTab = Tab.STOCK;
  }

  calcResult();
});

rangeElList.forEach(input => {
  input.addEventListener('input', () => {
    calcResult();
  });
});
