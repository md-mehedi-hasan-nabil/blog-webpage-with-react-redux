import { createStore } from 'redux';
import blogPostReducer from './blogPost/search/blogPostReducer';

const store = createStore(blogPostReducer);

export default store;
