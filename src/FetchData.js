import { API_KEY } from '.env';
import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public'

function getCharacters(){
    return axios.get( BASE_URL + '/characters?apikey=' + API_KEY)
        .then(function(obj){
            return obj.data.data.results
    })
}

function getCharacterProfile(userId) {
    return axios.get( BASE_URL + '/characters/' + userId + '?apikey=' + API_KEY)
      .then(function(obj) {
        return obj.data.data.results[0];
    })
  }

  function getCharacterComics(userId) {
    return axios.get( BASE_URL + '/characters/' + userId + '/comics?apikey=' + API_KEY)
      .then(function(obj) {
        return obj.data.data.results
    })
}

console.log(getCharacters)

// when making function in Javascript the function is added to the global scope and it is available to the window object
// However there is a problem in this behavior in the real world application we often split our javascript code into multiple files
// so it is possible there is two files that defines the same function 
// the definition will overwrite the previous definition
// every file is a module 
