import React from "react";

export default function CategoryLetter(props) {
  return (
    <div className="CategoryLetterWrapper">
      {props ? props[0].toUpperCase() : 'A'}
    </div>
  );
}
