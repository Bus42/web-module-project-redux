export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'

export const addToFavorites = (id) => {

    return ({
        type: ADD_TO_FAVORITES,
        payload: id
    })
}


export const removeFromFavorites = (id) => {

    return ({
        type: REMOVE_FROM_FAVORITES,
        payload: Number(id)
    })
}


export const toggleFavorites = () => {

    return ({
        type: TOGGLE_FAVORITES,
        payload: null
    })
}
