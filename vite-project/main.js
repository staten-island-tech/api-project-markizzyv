import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
/* import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;   

async function getData(URL){
    try {
      const response = await fetch(URL);
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
   
    }
}
getData(URL);





//https://api.themoviedb.org/api_key=26906062d4fd4de4f857063554f6f6d3