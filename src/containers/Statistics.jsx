import React from 'react';
import CardResource from '../components/CardResource';
import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFullyCustomizable,
} from '../imports';

const cardsData = [
  {
    img: IconBrandRecognition,
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    img: IconDetailedRecords,
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    img: IconFullyCustomizable,
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]

const Statistics = () => {
  return (
    <div className="url-shortening__statistics">
      <div className="url-shortening__statistics-headings">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="url-shortening__statistics-cards">
        {cardsData.map(({ title, description, img }) => (
          <CardResource
            key={ title }
            title={ title }
            img={ img }
            description={ description }
          />))}          
      </div>
    </div>
  );
}

export default Statistics;
