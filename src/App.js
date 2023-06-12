import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <BlogPosts />
      <Footer/>
    </Provider>
  );
}

export default App;
