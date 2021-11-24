const shortenLink = (link) => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then((res) => res.json())
    .then((res) => res.result);
};

export default shortenLink;

// import shortenLink from '../service';

console.log('http://www.google-com.123.com', validateUrl('http://www.google-com.123.com')); // true 
console.log('http://www.google-com.123', validateUrl('http://www.google-com.123')); // false 
console.log('https://www.google-com.com', validateUrl('https://www.google-com.com')); // true 
console.log('http://google-com.com', validateUrl('http://google-com.com')); // true 
console.log('http://google.com', validateUrl('http://google.com')); //true 
console.log('google.com', validateUrl('google.com')); //false
console.log('http://www.gfh.', validateUrl('http://www.gfh.')); //false
console.log('http://www.gfh.c', validateUrl('http://www.gfh.c')); //false
console.log('http://www.gfh:800000', validateUrl('http://www.gfh:800000')); //false
console.log('www.google.com ', validateUrl('www.google.com ')); //false
console.log('http://google', validateUrl('http://google')); //false
console.log('//cdnblabla.cloudfront.net/css/app.css', validateUrl('//cdnblabla.cloudfront.net/css/app.css')); //true

if (regex(value)) {
  if (input.classList.include('addLink')) {
    input.classList.remove('addLink');
  }
} 
if (!input.classList.include('addLink')) {
  input.classList.add('addLink');
}

const handleLink = ({ target: { value }}) => {
  if (input.classList.contains('addLink')) {
    input.classList.remove('addLink');
  }

  setLink(value);
}

onClick={ handleShortenLink }

const handleShortenLink = () => {
  if (link.length >= 1) {
    return fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => response.json())
      .then((response) => {
        const originalLink = response.result.original_link;
        const shortLink = response.result.full_short_link
        const obj = { originalLink, shortLink };
        setShorts([...shortLinks, obj]);
    })
    .catch((erro) => console.log(erro));
  }
  return input.classList.add('addLink');
}
