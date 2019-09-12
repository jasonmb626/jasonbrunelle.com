import React from 'react';

const Portfolio = () => {
  return (
    <div className='bg-image portfolio-image'>
      <div className='container-fluid full-width h-100'>
        <div className='jumbotron'>
          <h3>Texas House Witness</h3>{' '}
          <h5 className='mt-3'>This project includes</h5>
          <ul>
            <li>Data scraping</li>
            <li>Database Design and implementation</li>
            <li>Back-End API built with Node & Express</li>
            <li>Front-end UX/UI. No frameworks.</li>
          </ul>
          <a
            href='https://texashousewitness.info'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Link
          </a>
          &nbsp;to see for yourself and get more information.
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
