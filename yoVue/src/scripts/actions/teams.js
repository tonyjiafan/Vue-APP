import URL from '../constants/URL';

// 搜索图书
export const searchNba = query => {
    return fetch(`${URL.SEARCH}?q=${query}`)
    .then(response => response.json())
    .then(result => {
        return {
            flag: true,
            teams: result.books,
        };
    });
};
