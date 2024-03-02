let btn_coin = document.querySelector('.btn_coin');
let ochko = document.querySelector('.ochko');
let coin_line = document.querySelector('.line');
let mablag = document.querySelector('.mablag');
let mablag2 = document.querySelector('.mablag2');
let league_text = document.querySelector('.league_text');
let league_logo = document.querySelector('.league_logo');

let lg_logo = './img/serebro.png';

btn_coin.addEventListener('click', () => {
   if (mablag.textContent > 0) {
      ++ochko.textContent;
      --mablag.textContent;
      coin_line.style.width = '0%';
   }
});

btn_coin.addEventListener('click', () => {
   if (ochko.textContent > 1000) {
      league_text.textContent = 'Platinum'
      league_logo.setAttribute('src', lg_logo)
   }
});

btn_coin.addEventListener('click', () => {
   if (mablag.textContent == 0) {
      mablag.textContent = mablag2.textContent
      mablag2.textContent = '0'
   }
});

