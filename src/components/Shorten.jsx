import React, { useState } from 'react';
import { CardLink } from '../components';


const Shorten = () => {
  const [link, setLink] = useState();
  const [shortLinks, setShorts] = useState([]);
  // const input = document.getElementById('input');

  const regex = (url) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
  };

  const handleLink = ({ target: { value }}) => {
    setLink(value);
  }

  const handleShort = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => response.json())
      .then((response) => {
        const originalLink = response.result.original_link;
        const shortLink = response.result.full_short_link
        const obj = { originalLink, shortLink };
        setShorts([...shortLinks, obj]);
    })
    .catch((erro) => console.log(erro));
  }

  return (
    <div className="url-shortening__shorten">
      <div className="url-shortening__shorten-container" id="input">
        <label htmlFor="link">
          <input type="text" name="link" defaultValue="Shorten a link here..." onChange={ (ev) => handleLink(ev) } />
          <p>Please add a link</p>
        </label>
        <button type="button" onClick={ handleShort }>Shorten It!</button>
      </div>
      <div className="url-shortening__shorten-links">
        {shortLinks.map(({ originalLink, shortLink }, index) => <CardLink key={ `${shortLink}${index}` } link={ originalLink } shortLink={ shortLink } />)}
      </div>
    </div>
  );
}

export default Shorten;
