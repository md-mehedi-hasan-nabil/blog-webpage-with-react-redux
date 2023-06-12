import { v4 as uuidv4 } from 'uuid';
import {
  CLEAR,
  SEARCH_BY_AUTHOR,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_KEYWORD,
} from './actionTypes';

const blogPosts = [
  {
    id: uuidv4(),
    category: 'JavaScript',
    title: 'React Interview Questions',
    author: 'Michael Abrash',
    author_image: 'https://i.pravatar.cc/150?img=1',
    blog_post_background:
      'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: uuidv4(),
    category: 'Redux',
    title: 'Getting Started with Redux Library',
    author: 'Learn with Sumit',
    author_image: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    id: uuidv4(),
    category: 'Redux',
    title: 'The Most Powerful React JS Cheat Sheet',
    author: 'Michael Abrash',
    author_image: 'https://i.pravatar.cc/150?img=1',
    blog_post_background:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    id: uuidv4(),
    category: 'Web Development',
    title: 'Javascript Do While Loop',
    author: 'Scott Adams',
    author_image: 'https://i.pravatar.cc/150?img=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1656660371960-7fa3321af896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: uuidv4(),
    category: 'Node jS',
    title: 'What is Node Js',
    author: 'Leonard Adleman',
    author_image: 'https://i.pravatar.cc/150?img=5',
    blog_post_background:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    id: uuidv4(),
    category: 'Redux',
    title: 'What is Redux Toolkit? ',
    author: 'Learn with Sumit',
    author_image: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    id: uuidv4(),
    category: 'Web Development',
    title: 'Getting Started with MongoDB',
    author: 'Learn with Sumit',
    author_image: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1655883815065-06262c1f3c1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: uuidv4(),
    category: 'Web Development',
    title: 'Front-End Resources',
    author: 'Scott Adams',
    author_image: 'https://i.pravatar.cc/150?img=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1657524433787-a30cefc92661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: uuidv4(),
    category: 'Node JS',
    title: 'Function parameters in modern javascript',
    author: 'Leonard Adleman',
    author_image: 'https://i.pravatar.cc/150?img=5',
    blog_post_background:
      'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: uuidv4(),
    category: 'Web Development',
    title: 'Make your JavaScript Typed Safe',
    author: 'Scott Adams',
    author_image: 'https://i.pravatar.cc/150?img=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: uuidv4(),
    category: 'Node JS',
    title: 'Node Js for beginners',
    author: 'Leonard Adleman',
    author_image: 'https://i.pravatar.cc/150?img=5',
    blog_post_background:
      'https://images.unsplash.com/photo-1650169075825-1ee9efe6e66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
  },
  {
    id: uuidv4(),
    category: 'Web Development',
    title: 'Fetching data in Redux using RTK Query',
    author: 'Learn with Sumit',
    author_image: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    blog_post_background:
      'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const initialState = {
  blogs: [...blogPosts],
};

export default function blogPostReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_KEYWORD:
      const KEYWORD = action.payload.keyword.toLowerCase();
      const oldState = { ...state, blogs: [...state.blogs] };
      let result = oldState.blogs.filter((obj) => {
        if (obj.title.toLowerCase().includes(KEYWORD)) {
          return true;
        } else {
          return false;
        }
      });

      if (!KEYWORD) {
        result = [...blogPosts];
      }

      return {
        ...state,
        blogs: [...result],
      };

    case SEARCH_BY_AUTHOR:
      const AUTHOR_KEYWORD = action.payload.keyword.toLowerCase();
      const copyState = { ...state, blogs: [...state.blogs] };
      let filterArray = copyState.blogs.filter((obj) => {
        if (obj.author.toLowerCase().includes(AUTHOR_KEYWORD)) {
          return true;
        } else {
          return false;
        }
      });

      if (!AUTHOR_KEYWORD) {
        filterArray = [...blogPosts];
      }

      return {
        ...state,
        blogs: [...filterArray],
      };

    case SEARCH_BY_CATEGORY:
      const CATEGORY_KEYWORD = action.payload.keyword.toLowerCase();
      const categoryState = { ...state, blogs: [...state.blogs] };
      let resultArray = categoryState.blogs.filter((obj) => {
        if (obj.category.toLowerCase().includes(CATEGORY_KEYWORD)) {
          return true;
        } else {
          return false;
        }
      });

      if (!CATEGORY_KEYWORD) {
        resultArray = [...blogPosts];
      }

      return {
        ...state,
        blogs: [...resultArray],
      };

    case CLEAR:
      return {
        ...state,
        blogs: [...blogPosts],
      };

    default:
      return state;
  }
}
