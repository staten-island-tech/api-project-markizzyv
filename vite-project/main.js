import './style.css';
import { DOMSelectors } from './dom.js';


<<<<<<< HEAD



const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;  
async function getData(URL){
=======
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
>>>>>>> b7593534d00d095a780bb8e009aaf3a1153b3d51
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
  var movSearch = `${DOMSelectors.searchBar.value}`
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=26906062d4fd4de4f857063554f6f6d3&query=${movSearch}`;
  movgetData(searchURL);
});



async function movgetData(searchURL) {
  try {
    const response = await fetch(searchURL);
<<<<<<< HEAD

    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
   
    
    insertMov(data.results)

    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No Results Found: try a good movie instead buddy";
      document.querySelector(".flex-container").innerHTML = "";
    } else {
      document.querySelector(".error").textContent = "";
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error Data Cannot Be Found";
  }
}



getData(URL);

























/*  function movInsert (arr){
  arr.forEach((results)=> {
    document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", 
    `
    <div class="card">
    <h2 class = "movTitle">${results.title}</h2>
    </div>
    `
    )
  });
 }

/* DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
<<<<<<< HEAD




=======
>>>>>>> 7b26f06efc56549f3a09750a0ba8a0a4a12389b7
});
 */

 function insertMov (arr){

  data.forEach((results)=> {
    document.querySelector(".flex-container").insertAdjacentHTML(afterbegin,

  `
  <div class= "card">
  <h2 class ="movTitle">${results.title}</h2>  
  <img src = "https://image.tmdb.org/t/p/w500${results.poster_path}" class ="movImg">
  <p class ="movOverview">${results.overview}</p>
  </div>
  `

    )
  }
  )
}

insertMov();  










//logging in




//logging in
/* async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status !=200){
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    movInsert(data)
    if (data.length === 0){
      document.querySelector(".error").textContent = "Error";
      document.querySelector(".flex-container").innerHTML = "";
      return data
    }
  } catch (error) {
   // console.log(error);
   document.querySelector(".error").textContent = "Error";
 
  }
}
getData(URL); */
 
/* 
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector(".flex-container").innerHTML = "";
  var movSearch = `${DOMSelectors.searchBar.value}`
  console.log(movSearch)
  const searchURL = `'https://api.themoviedb.org/3/search/movie?query=${movSearch}&api_key=26906062d4fd4de4f857063554f6f6d3`;

  function Insert(datarr){
    datarr.forEach((results)=> {
      document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", 
      `
     <div class="card">
     <h2 class = "movTitle">${results.title}</h2>
     </div>
      `
      )
    })
  } */
/* async function movgetData (searchURL) {
  try {
    const response = await fetch(searchURL);
=======
>>>>>>> b7593534d00d095a780bb8e009aaf3a1153b3d51
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








