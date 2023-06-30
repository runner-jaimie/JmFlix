// Global App State
import React from 'react';
import globalHook from 'use-global-hook';

// Function to get the favorites movies form
// localStorage
function getFavs(){
    let favsFromStorage = localStorage.getItem('movie-app-favs');
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const actions = {
    addFav: (store, movie) => {
        // Add new movie toe the currnet state array...
        const newFavs = [...store.state.favs, movie];

        // Stringify the new array for localStorage
        const newFavsForStorage = JSON.stringify(newFavs);
        
        //Send the newly updated array to localStorage 
        localStorage.setItem('movie-app-favs', newFavsForStorage);
        
        // Update our global favs state
        store.setState({ favs: newFavs });

    },
    removeFav: (store, id) => {
        // Get the current favs
        let currentFavs = store.state.favs;

        // Get the index value of the movie we want to remove
        // using .findIndex() (Native JavaScript)
        const indexOfMovieToRemove = currentFavs.findIndex((movie) => movie.id === id);

        // Remove the movie using the .splice() (Native JavaScript)
        currentFavs.splice(indexOfMovieToRemove, 1);
    
        // Stringify the new arry for localStorage
        let favsForStorage = JSON.stringify(currentFavs);

        // Send the favsForStorage sting to localStorage
        localStorage.setItem('movie-app-favs', favsForStorage);
        
        // Update our global favs state
        store.setState({ favs: currentFavs });
    },
    setFavs: (store) => {
        store.setState({ favs: getFavs() })
    } 
}

const initialState = {
    favs: getFavs()
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;