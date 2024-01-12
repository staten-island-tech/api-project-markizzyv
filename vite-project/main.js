import './style.css';
import { DOMSelectors } from './dom.js';


// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;  


const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;

//insert display cards
function movInsert(arr) {


  document.querySelector(".flex-container").innerHTML = '';
  
  
      arr.forEach((card)=> {
        const {title, poster_path, overview} = card;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
       
      ` <div class= "card">
      <h1 class ="movTitle">${title}</h1>  
      <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg" alt = "">
      <p class ="movOverview">${overview}</p>
      </div>
    `
      document.querySelector(".flex-container").appendChild(movieEl);
  

  });
}



async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status !=200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data)
    movInsert(data.results); 
   
    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No Results Found: try a good movie instead buddy";
      document.querySelector(".flex-container").innerHTML = "";
      return data
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error Data Cannot Be Found";
  }
}




DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  document.querySelector(".flex-container").innerHTML = "";
  const movSearch = DOMSelectors.searchBar.value; //no brackets
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=26906062d4fd4de4f857063554f6f6d3&query=${movSearch}`;
  movgetData(searchURL);
});



async function movgetData(searchURL) {
  try {
    const response = await fetch(searchURL);


    if (response.status !=200) {
      throw new Error(response.statusText);
    }


    console.log(response);
    const data = await response.json();
    console.log(data)
    movInsert(data.results); //only 1 function

    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No Results Can Be Found: try a good movie instead buddy";
    } else {
      document.querySelector(".error").textContent = "";
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error Data Cannot Be Found";
  }
}


getData(URL);








