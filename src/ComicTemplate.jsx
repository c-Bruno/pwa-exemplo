import React from "react";

const ComicTemplate = (props) => {
  const { title, thumbnail, prices } = props.comic;

  return (
    <figure>
      <img src={`${thumbnail.path}.jpg`} alt="Comic thumbnail" />
      <figcaption>
        <div className="rating">
          <i className="fa fa-heart" />
          <h4>{title}</h4>
        </div>
        <p>R$ {prices[0].price}</p>
      </figcaption>
    </figure>
  );
};

export default ComicTemplate;
