import axios from 'axios';

export const beerAPI = {
  getBeer(pageNumber, searchString) {
    const searchName = searchString.length !== 0 ? `&beer_name=${searchString}` : '';
    return axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=8${searchName}`);
  },
};
