import React from 'react';

export default function Card({
  blog,
  authorFilterHandler,
  categoryFilterHandler,
}) {
  const { title, author, category, author_image, blog_post_background } = blog;

  return (
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover scale-100 hover:scale-110 duration-1000"
          draggable="false"
          src={blog_post_background}
          alt={title}
        />
      </div>

      <div className="flex-1 bg-slate-50 hover:bg-slate-200 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={() => categoryFilterHandler(category)}
              className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {category}
            </span>
          </p>
          <a href="# " className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={author_image} alt="" />
          </div>
          <div className="ml-3">
            <p
              onClick={() => authorFilterHandler(author)}
              className="text-sm font-medium cursor-pointer text-gray-900 hover:underline"
            >
              {author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">11 Jul, 2022 </time>
              <span aria-hidden="true"> &middot; </span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
