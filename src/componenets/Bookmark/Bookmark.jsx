import PropTypes from "prop-types";

export default function Bookmark({ bookmark }) {
  const {title} = bookmark;
  return (
    <div>
      <h3>Titles: {title}</h3>
    </div>
  );
}

Bookmark.propTypes = {
  bookmark: PropTypes.object
}