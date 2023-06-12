import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clear,
  searchByAuthor,
  searchByCategory,
  searchByKeyword,
} from '../redux/blogPost/search/actions';
import Card from './Card';
import Search from './Search';
import deleteSvg from '../assets/delete.svg';

export default function BlogPosts() {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const inputRef = useRef('');

  const [authorFilterInfo, setAuthorFilterInfo] = useState({
    keyword: '',
    show: false,
  });

  const [categoryFilterInfo, setCategoryFilterInfo] = useState({
    keyword: '',
    show: false,
  });

  function debounce(fn, delay) {
    let timeOut;
    return function () {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      timeOut = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  function onChangeHandler() {
    const keyword = inputRef.current.value;
    dispatch(searchByKeyword(keyword));
  }

  function authorFilterHandler(keyword) {
    dispatch(searchByAuthor(keyword));
    setAuthorFilterInfo({
      keyword: keyword,
      show: true,
    });
  }

  function categoryFilterHandler(keyword) {
    dispatch(searchByCategory(keyword));
    setCategoryFilterInfo({
      keyword: keyword,
      show: true,
    });
  }

  function clearAuthorFilterHandler() {
    dispatch(clear());
    setAuthorFilterInfo({
      keyword: '',
      show: false,
    });
    setCategoryFilterInfo({
      keyword: '',
      show: false,
    });
  }

  return (
    <React.Fragment>
      <Search
        inputRef={inputRef}
        onChangeHandler={onChangeHandler}
        debounce={debounce}
      />
      <main className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
            <div className="mt-3 flex justify-center items-center gap-2">
              {authorFilterInfo.show && (
                <p className="bg-slate-200 px-2 py-1 rounded-full">
                  {authorFilterInfo.keyword}
                </p>
              )}
              {categoryFilterInfo.show && (
                <p className="bg-slate-200 px-2 py-1 rounded-full">
                  {categoryFilterInfo.keyword}
                </p>
              )}
              {(authorFilterInfo.show || categoryFilterInfo.show) && (
                <button
                  onClick={clearAuthorFilterHandler}
                  className="flex justify-center items-center gap-1 cursor-pointer bg-red-200 hover:bg-red-300 px-2 py-1 rounded-full"
                >
                  <img className="inline-block" src={deleteSvg} alt="clear" />
                  Clear
                </button>
              )}
            </div>
          </div>

          <section className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {blogs.length
              ? blogs.map((blog) => (
                  <Card
                    key={blog.id}
                    blog={blog}
                    authorFilterHandler={authorFilterHandler}
                    categoryFilterHandler={categoryFilterHandler}
                  />
                ))
              : 'No Match Found'}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
