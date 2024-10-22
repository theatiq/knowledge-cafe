import React from "react";
import PropTypes from "prop-types";

import { IoBookmarkSharp } from "react-icons/io5";

export default function Blog({ blog, handleAddToBookmark, handleMarkAsRead }) {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14 object-cover" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-300"
          >
            <IoBookmarkSharp></IoBookmarkSharp>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(reading_time)}>
        Mark as Read
      </button>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};
