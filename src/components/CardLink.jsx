import React from 'react';

const CardLink = ({ link, shortLink }) => {
  return (
    <div className="url-shortening__shorten-links-link slide-in-blurred-top">
      <h2>{ link }</h2>
      <h2 className="short">{ shortLink }</h2>
      <button type="button">Copy</button>
    </div>
  );
}

export default CardLink;
