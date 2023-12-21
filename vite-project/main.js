import './style.css'
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
DOMSelectors.form.addEventListener("submit", (event) => 
event.preventDefault());



//https://api.themoviedb.org/api_key=26906062d4fd4de4f857063554f6f6d3