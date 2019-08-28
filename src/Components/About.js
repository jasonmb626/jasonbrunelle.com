import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>About Me</h1>
        <p className='lead'>
          I recently graduated with a degree in Computer Science from the
          University of Houston Downtown at which point I relocated to Chicago,
          Illinois. Full stack web development combines my passions for
          programming, system administration, and making applications that can
          benefit anyone by using on their desktop or mobile.
        </p>
        <hr className='my-4' />
        <p>
          It has been a joy to watch as JavaScript grew from a language we
          tolerated because we didn't have anything better into a language that
          is sought out even for back-end development. I embrace functional
          programming concepts and higher-order functions.
        </p>
      </div>
    </div>
  );
};

export default About;
