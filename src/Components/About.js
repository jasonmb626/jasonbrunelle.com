import React from 'react';

const About = () => {
  return (
    <main className='bg-image about-image'>
      <div className='container'>
        <div className='jumbotron mx-auto'>
          <h1 className='display-4'>About Me</h1>
          <p className='lead'>
            I discovered my love of computers at a young age. I've been
            programming since the age of 11 and setting up Linux and Windows
            machines since the age of 19. 20+ years later I have as much passion
            as I ever had. With 15 years management experience on top of this, I
            bring maturity, dedication, and professionalism to the table.
          </p>
          <p className='show-md'>
            I recently graduated with a degree in Computer Science from the
            University of Houston Downtown at which point I relocated to
            Chicago, Illinois. Full stack web development combines my passions
            for programming, system administration, and making applications that
            can benefit anyone on their desktop or mobile. It has been a joy to
            watch as JavaScript grew from a language we tolerated because we
            didn't have anything better into a language that is sought out even
            for back-end development, data scraping, and console applications.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
