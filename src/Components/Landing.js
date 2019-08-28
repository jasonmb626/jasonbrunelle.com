import React from 'react';

const Landing = () => {
  return (
    <div className='container d-inline-block vh-100'>
      <div className='row d-inline-block h-100 w-100'>
        <div className='col-md-6 col-lg-3 d-inline-block h-100'>
          <div className='card-column'>
            <div className='card text-center'>
              <div className='card-header'>Back End</div>
              <div className='card-body text-justify'>
                <ul>
                  <li>NodeJs/Express</li>
                  <li>MongoDB/Postgres</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
            <div className='card text-center mt-3'>
              <div className='card-header'>Front End</div>
              <div className='card-body text-justify'>
                <ul>
                  <li>HTML/CSS/JavaScript</li>
                  <li>React</li>
                  <ul>
                    <li>Context API</li>
                    <li>Redux</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 d-inline-block h-100'>
          <div className='card-column'>
            <div className='card text-center'>
              <div className='card-header'>Other Languages</div>
              <div className='card-body text-justify'>
                <ul>
                  <li>C/C++/C#</li>
                  <li>Java</li>
                  <li>Visual Basic</li>
                </ul>
              </div>
            </div>
            <div className='card text-center mt-3'>
              <div className='card-header'>Other tools</div>
              <div className='card-body text-justify'>
                <ul>
                  <li>Git</li>
                  <li>Microsoft&nbsp;Office</li>
                  <li>Visual Studio/VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
