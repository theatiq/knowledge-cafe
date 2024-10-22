import React from "react";

export default function Bookmark({ bookmark }) {
  const {title} = bookmark;
  return (
    <div>
      <h3>Titles: {title}</h3>
    </div>
  );
}

