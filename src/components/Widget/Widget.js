import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widget.css';

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widget__article'>
      <div className='widget__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widget__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widget'>
      <div className='widget__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('React is awesome!!!', 'Top news - 999 readers')}
      {newsArticle(
        'Coronavirus - South Korea Updates',
        'Top news - 9999 readers'
      )}
      {newsArticle('Redux vs Context ', 'Code - 235 readers')}
      {newsArticle('How to be a developer??', 'IT - 4343 readers')}
    </div>
  );
};

export default Widget;
