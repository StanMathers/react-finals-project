const loadParsedFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites"));
};

const dateExistsInFavourites = (date) => {
    let favourites = loadParsedFavourites();
    if (!favourites) {
        return false;
    }
    for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].date === date) {
            return true;
        }
    }
    return false;
};

const fetchFavouriteByDate = (date) => {
    let parsedFavourites = loadParsedFavourites();
    if (!parsedFavourites) {
        return null;
    }

    for (let i = 0; i < parsedFavourites.length; i++) {
        if (parsedFavourites[i].date === date) {
            return parsedFavourites[i];
        }
    }
}


export { loadParsedFavourites, dateExistsInFavourites, fetchFavouriteByDate }
