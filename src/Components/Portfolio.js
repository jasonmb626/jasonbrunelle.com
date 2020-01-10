import React from 'react';

const Portfolio = () => {
  return (
    <div className='bg-image portfolio-image'>
      <div className='container-fluid full-width h-100'>
      <div className='jumbotron'>
          <h3>Welcome to my portfolio!</h3>{' '}
          <h6 className='mt-3'>This portfolio is JavaScript-heavy. I also have experience with C# and Java (I practice HackerRank challenges in these languages) as well as C and C++ in school. My full projects tend towards JavaScript at this time. These projects do reinvent the wheel a bit, but have been a great chance to learn new skills.</h6>
        </div>
        <div className='jumbotron'>
          <h3>Texas House Witness</h3>{' '}
          <h5>Search a scraped version of the affidavit records from Texas Legislature Online (TLO).</h5>
          <h5 className='mt-3'>This project explores</h5>
          <ul>
            <li>Data scraping</li>
            <li>Database Design and implementation using raw SQL</li>
            <li>Back-End API built with Node & Express</li>
            <li>Front-end UX/UI.</li>
          </ul>
          <h6>I specifically wanted to use this project to stay as low-level as possible regarding technologies. All UI manipulation is plain JavaScript without frameworks. I didn't even use the DataTables plugin. I wanted to have a descent grasp of what frameworks really do before utilizing one.</h6>
          <h6>Other projects utilze NoSQL with ODMs or SQL with ORMs as well as use of front-end frameworks.</h6>
          <a
            href='https://texashousewitness.info'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Link
          </a>
          &nbsp;to see for yourself and get more information.
        </div>
        <div className='jumbotron'>
          <h3>Password Keeper</h3>{' '}
          <h5>A React Native app handling basic crud operations and encryption.</h5>
          <h5 className='mt-3'>This project explores</h5>
          <ul>
            <li>React Native & Expo</li>
            <li>React's Context API</li>
            <li>TypeScript</li>
            <li>TypeORM & SQLite</li>
            <li>Cryptography/Security</li>
          </ul>
          <a
            href='https://github.com/jasonmb626/Password_Keeper_React_Native'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit the GitHub
          </a>
          &nbsp;to see for yourself and get more information.
        </div>
        <div className='jumbotron'>
          <h3>Job Dashboard</h3>{' '}
          <h5>Custom full stack web app to keep track of jobs applied to, who to follow up with, etc.</h5>
          <h6>This project gave me plenty of experience debugging and refactoring code.</h6>
          <h5 className='mt-3'>This project explores</h5>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>NodeJS & Express</li>
            <li>MongoDB & Mongoose</li>
            <li>REST API with authentication</li>
          </ul>
          <a
            href='https://github.com/jasonmb626/job_dashboard'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit the GitHub
          </a>
          &nbsp;to see for yourself and get more information.
        </div>
        <div className='jumbotron'>
          <h3>Hospital Project (Contributor)</h3>{' '}
          <h5>Centralized website where users can get data regarding how many cancer surgeries of a given type a given hospital has performed. (In progress)</h5>
          <h5 className='mt-3'>This project explores</h5>
          <ul>
            <li>JQuery</li>
            <li>DataTables plugin</li>
            <li>CSV Parsing</li>
            <li>Team collaboration</li>
          </ul>
          <a
            href='https://github.com/best-chicago-hospitals/best-chicago-hospitals-website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit the GitHub
          </a>
          &nbsp;to see for yourself and get more information.
        </div>
      </div>
    </div>    
  );
};

export default Portfolio;
