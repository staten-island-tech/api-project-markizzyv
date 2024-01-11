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
    <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg">
    <p class ="movOverview">${overview}</p>
    </div>
  `
    document.querySelector(".flex-container").appendChild(movieEl);


  });
}

async function getData(URL) {
>>>>>>> 7b26f06efc56549f3a09750a0ba8a0a4a12389b7
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
  const movSearch = DOMSelectors.searchBar.value;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=26906062d4fd4de4f857063554f6f6d3&query=${movSearch}`;
  movgetData(searchURL);


/* 
  function Insert(data){
    data.forEach((card)=> {
      const {title, poster_path, overview} = card;
      document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", 
       
      ` <div class= "card">
      <h1 class ="movTitle">${title}</h1>  
      <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg">
      <p class ="movOverview">${overview}</p>
      </div>
    `
      document.querySelector(".flex-container").appendChild(movieEl);
  
      )
    });
  } 
  
}) //1 func only ig
  */


async function movgetData(searchURL) {
  try {
    const response = await fetch(searchURL);

    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
<<<<<<< HEAD
    return data;
    iinsertMov(data)
=======
    movInsert(data.results); //use diff insert function
>>>>>>> 7b26f06efc56549f3a09750a0ba8a0a4a12389b7

    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No Results Found: try a good movie instead buddy";
      document.querySelector(".flex-container").innerHTML = "";
    } else {
      document.querySelector(".error").textContent = "";
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error fetching data";
  }
}
<<<<<<< HEAD
})
=======
<<<<<<< HEAD
getData(URL)



function iinsertMov (arr){

arr.forEach((results)=> {
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
  
=======

>>>>>>> 33e7d868ed392477a7bc11846a7727db5f3ec723

getData(URL);
>>>>>>> 7b26f06efc56549f3a09750a0ba8a0a4a12389b7













/* const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;


// Function to create and insert movie cards
function movInsert(arr) {


document.querySelector(".flex-container").innerHTML = '';


    arr.forEach((card)=> {
      const {title, poster_path, overview} = card;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML =
     
    ` <div class= "card">
    <h1 class ="movTitle">${title}</h1>  
    <img src = "https://image.tmdb.org/t/p/w500${poster_path}" class ="movImg">
    <p class ="movOverview">${overview}</p>
    </div>
  `
    document.querySelector(".flex-container").appendChild(movieEl);




  });
<<<<<<< HEAD
}
=======
 }

/* DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
<<<<<<< HEAD




=======
>>>>>>> 7b26f06efc56549f3a09750a0ba8a0a4a12389b7
});
 */
>>>>>>> 33e7d868ed392477a7bc11846a7727db5f3ec723

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
  const movSearch = DOMSelectors.searchBar.value;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=26906062d4fd4de4f857063554f6f6d3&query=${movSearch}`;
  movgetData(searchURL);
});


// Function to fetch and display search results
async function movgetData(searchURL) {
  try {
    const response = await fetch(searchURL);


    if (!response.ok) {
      throw new Error(response.statusText);
    }


    const data = await response.json();
   
    movInsert(data.results); // Assuming 'results' property contains an array of movies


    if (data.results.length === 0) {
      document.querySelector(".error").textContent = "No results found";
    } else {
      document.querySelector(".error").textContent = "";
    }
  } catch (error) {
    document.querySelector(".error").textContent = "Error fetching data";
  }
}


getData(URL);



*/



