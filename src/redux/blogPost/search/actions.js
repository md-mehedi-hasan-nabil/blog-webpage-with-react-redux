import {
  CLEAR,
  SEARCH_BY_AUTHOR,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_KEYWORD,
} from './actionTypes';

export function searchByKeyword(keyword) {
  return {
    type: SEARCH_BY_KEYWORD,
    payload: {
      keyword: keyword,
    },
  };
}

export function searchByAuthor(keyword) {
  return {
    type: SEARCH_BY_AUTHOR,
    payload: {
      keyword: keyword,
    },
  };
}

export function searchByCategory(keyword) {
  return {
    type: SEARCH_BY_CATEGORY,
    payload: {
      keyword: keyword,
    },
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
