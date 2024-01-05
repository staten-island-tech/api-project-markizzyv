import './style.css';


import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


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

/* async function searchData(URL){

};

searchData(URL)
 */

document.querySelector(".main").addEventListener("submit", (event) => 
event.preventDefault());

function addMovie(arr){ 
  arr.forEach((results)=> document.querySelector(".flex-container").insertAdjacentHTML("beforebegin",
 
  `<div class="card">
   <h1 class ="movietitle">${results.original_title}<h1>
   <h2 class ="movieimg">${results.poster_path}</h2>
   <p class ="moviedesc">${results.overview}</p>
   <h3 class ="moviedate">${results.release_date}</h3>
  </div>`

));
};







//https://api.themoviedb.org/api_key=26906062d4fd4de4f857063554f6f6d3