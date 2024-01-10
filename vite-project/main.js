import './style.css';
import { DOMSelectors } from './dom.js';


const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;  


function Insert(secondarr){
  secondarr.forEach((results)=> {
    document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
    `<div class="card">
    <h1 class ="movietitle">${results.original_title}<h1>
    <h2 class ="movieimg">${results.poster_path}</h2>
    <p class ="moviedesc">${results.overview}</p>
    <h3 class ="moviedate">${results.release_date}</h3>
   </div>`
    );
  });
}


async function getData(searchURL){
    try {
      const response = await fetch(URL);
      if (response.status !=200) {
        throw new Error(response.statusText);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      Insert(data)
      if (data.length === 0) {
        document.querySelector(".Error").textContent = "Error"
        document.querySelector(".flex-container").textContent = "";
      }
    } catch (error) {
 
      document.querySelector(".Error").textContent = "Error";
    }
}


getData(URL);


DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  document.querySelector(".Flex-container").innerHTML = "";
  var movSearch = `${DOMSelectors.searchBar.value}`
  console.log(movSearch)
  const searchURL = `https://www.themoviedb.org/search?query=${movSearch}`


function addMovie (arr){
  arr.forEach((results)=> {
    document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
 
  `<div class="card">
   <h1 class ="movietitle">${results.original_title}<h1>
   <h2 class ="movieimg">${results.poster_path}</h2>
   <p class ="moviedesc">${results.overview}</p>
   <h3 class ="moviedate">${results.release_date}</h3>
  </div>`
    );
  });
 };


async function getMovData(searchURL){
  try{
    const response = await fetch(searchURL);
    if (response.status !=200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    addMovie(data);
    if (data.length === 0){
      document.querySelector(".Error").textContent = "Error";
      document.querySelector(".flex-container").innerHTML = "";


    } else {
      document.querySelector(".Error").textContent = "";


    }
  } catch (error){
       document.querySelector(".Error").textContent = "Error";
  }
}
getMovData(searchURL)


});

/* async function getMovData(searchURL){
  try{
    const response = await fetch(searchURL);
    if (response.status !=200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    cons ole.log(data);
    addMovie(data);
    if (data.length === 0){
      document.querySelector(".Error").textContent = "Error";
      document.querySelector(".flex-container").innerHTML = "";

    } else {
      document.querySelector(".Error").textContent = "";

    }
  } catch (error){
       document.querySelector(".Error").textContent = "Error";
  }
}
getMovData(searchURL)
*/

 




/* async function searchData(URL){

};

searchData(URL)
 */

//const ser = (link)=${shit}









//https://api.themoviedb.org/api_key=26906062d4fd4de4f857063554f6f6d3