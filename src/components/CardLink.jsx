import React from 'react';

class CardLink extends React.Component {
  constructor() {
    super();

    this.state = {
      copied: false,
    }
  }

  handleCopy = (link) => {
    this.setState({copied: true});
    navigator.clipboard.writeText(link);
  };

  componentDidUpdate() {
    const button = document.getElementById('copyLink');
    button.classList.add('copyLink');
  };
  
  render () {
    const { props: { link, shortLink }, state: { copied } } = this;
    return (
      <div className="url-shortening__shorten-links-link slide-in-blurred-top">
        <h2>{ link }</h2>
        <h2 className="short">{ shortLink }</h2>
        <button id="copyLink" type="button" onClick={() => this.handleCopy(shortLink) }>{copied ? 'Coied!' : 'Copy'}</button>
      </div>
    );
  }
 
}

export default CardLink;
