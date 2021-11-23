import React from 'react';
import { CardLink } from '../components';

const Shorten = () => {
  return (
    <div className="url-shortening__shorten">
      <div className="url-shortening__shorten-container">
        <input type="text" defaultValue="Shorten a link here..." />
        <button type="button">Shorten It!</button>
      </div>
      <div className="url-shortening__shorten-links">
        <CardLink link="link" shortLink="shortLink" />
      </div>
    </div>
  );
}

export default Shorten;
