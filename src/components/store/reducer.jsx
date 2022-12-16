import { act } from "react-dom/test-utils"

const initialState = {
    title: 'Новый список',
    favorites: [],
    movies: []
}

export function fetcher(ev){
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?s=${ev}&apikey=9436cee1`)
        .then(res => res.json())
        .then((data) => {
            console.log(data.Search)
            // dispatch({type: 'SEARCH', payload: data.Search})
        })
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_FAVORITES':
            let obj = state.movies.find((item) => item.imdbID === action.payload)
            let newArr = [...state.favorites, obj]
            return {...state, favorites: newArr}
        case 'SEARCH':
            console.log(state.movies)
            return {...state, movies: action.payload}
    }
    return state
}

export default reducer