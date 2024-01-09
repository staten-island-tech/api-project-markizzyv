import './style.css';
import { DOMSelectors } from './dom.js';

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=26906062d4fd4de4f857063554f6f6d3&page=1`;   

// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const main = document.getElementById(".main");

async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status !=200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data.length === 0) {
      document.querySelector(".Error").textContent = "Error"
      document.querySelector(".flex-container").textContent = "";
    }
  } catch (error) {
    document.querySelector(".error-message").textContent = "Error: Unable to fetch data";
  }
 
}

getData(URL)

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