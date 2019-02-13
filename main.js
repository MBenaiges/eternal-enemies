'use strict'

const main = () =>{
  
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const spalshScreen = buildDom(`
    <section class="splash-screen"></section>
    <h1>Eternal enemies</h1>
    <button>Start</button>
    </section>
    `);
  };

  buildSplashScreen();
} ;

window.addEventListener('load',main);