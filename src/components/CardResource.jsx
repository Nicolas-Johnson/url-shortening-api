import React from 'react';

const CardResource = ({ img, title, description }) => {
  return (
    <div className="url-shortening__statistics-cards-card">
      <div className="url-shortening__statistics-cards-card_image">
        <img src={ img } alt={ title } />
      </div>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}

export default CardResource;
