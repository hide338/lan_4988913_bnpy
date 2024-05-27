/* ==============================================================================
  ローディングアニメーション
  ============================================================================= */
const LOADING = document.querySelector('.js-loader');
const CHARACTERS = document.querySelectorAll('.js-load');

window.onload = () => {

  // ローディング画面の設定
  setTimeout(() => {
    LOADING.classList.add('is-loaded');
  }, 1000);

  // ロード後のアニメーション設定
  setTimeout(() => {
    CHARACTERS.forEach(element => {
      element.classList.add('is-load');
    });
  }, 1700);
};

/* ==============================================================================
  ヘッダースクロールイベント
  ============================================================================= */
  const HEADER = document.querySelector('.js-header');
  console.log(HEADER);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      HEADER.classList.add('is-active');
    } else {
      HEADER.classList.remove('is-active');
    }
  });

/* ==============================================================================
  ナビゲーションメニュー
  ============================================================================= */
const NAV_BTN = document.getElementById('navbtn');
const MENU = document.getElementById('menu');
const HAMBURGER = document.getElementById('hamburger');
NAV_BTN.addEventListener('click', () => {
  console.log('NAV_BTN');
  MENU.classList.toggle('active');
  HAMBURGER.classList.toggle('active');
});
document.querySelectorAll('.c-spBtn').forEach(item => {
  item.addEventListener('click', () => {
    MENU.classList.toggle('active');
    HAMBURGER.classList.toggle('active');
  });
});

/* ==============================================================================
  スクロールアニメーション
  ============================================================================= */
const SVG_ELEMENT = document.querySelectorAll('.js-svgaction');
const BALOONS = document.querySelectorAll('.js-baloon');
const SCROLL_ITEMS = document.querySelectorAll('.js-scroll');


// IntersectionObserverのコールバック関数
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 可視範囲に入った要素にクラスを追加
      if (entry.target.classList.contains('js-svgaction')) {
        entry.target.classList.add('is-play');
      }
      if (entry.target.classList.contains('js-baloon')) {
        entry.target.classList.add('is-play');
      }
      if (entry.target.classList.contains('js-scroll')) {
        entry.target.classList.add('is-play');
      }
      // 観察を停止
      observer.unobserve(entry.target);
    }
  });
};

// IntersectionObserverのオプション
const options = {
  threshold: 0.2
};

// IntersectionObserverのインスタンスを作成
const observer = new IntersectionObserver(callback, options);

// スライドインする要素を観察
SVG_ELEMENT.forEach(element => {
  observer.observe(element);
});

BALOONS.forEach(element => {
  observer.observe(element);
});

SCROLL_ITEMS.forEach(element => {
  observer.observe(element);
});

/* ==============================================================================
  スムーススクロール
  ============================================================================= */
// const SMOOTH_SCROLL = document.querySelectorAll('a[href^="#"]');
// SMOOTH_SCROLL.forEach(element => {
//   element.addEventListener('click', e => {
//     e.preventDefault();
//     const HREF = element.getAttribute('href');
//     const TARGET_ELEMENT = document.querySelector(HREF);
//     const POSITION = TARGET_ELEMENT.getBoundingClientRect().top;
//     window.scrollTo({
//       top: POSITION,
//       behavior: 'smooth'
//     });
//   });
// });