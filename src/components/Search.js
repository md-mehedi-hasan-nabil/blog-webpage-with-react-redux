import React from 'react';
import search from '../assets/search.svg';

export default function Search({ onChangeHandler, debounce, inputRef }) {
  return (
    <div className="border-2 shadow-lg sticky top-5 z-50 mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50/70 backdrop-blur-lg h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-transparent h-full w-full mr-2"
        type="search"
        name="search"
        ref={inputRef}
        onChange={debounce(onChangeHandler, 1000)}
        placeholder="Search"
      />
      <img className="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  );
}
