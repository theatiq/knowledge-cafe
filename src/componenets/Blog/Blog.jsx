import React from "react";
import PropTypes from "prop-types";

export default function Blog({ blog }) {
  console.log(blog);
  const { title, cover, author, author_img, reading_time, posted_date } = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div>
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">Title: {title}</h2>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
