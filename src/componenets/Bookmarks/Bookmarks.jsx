
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3">
      <h3>Reading Time: {readingTime}</h3>
      <h2 className="text2">Bookmarked Blogs: {bookmarks.length}</h2>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
