import React from 'react';

const Landing = () => {
  return (
    <div className='container-fluid full-width h-100'>
      <div className='row header-row'>
        <div className='col-12 col-md-8 col-lg-6 mt-auto text-center text-white'>
          <h1>Skills</h1>
        </div>
      </div>
      <div className='row content-row mb-auto'>
        <div className='col-12 col-md-4 col-lg-3'>
          <div className='card-column'>
            <div className='card text-center'>
              <div className='card-header'>Back End</div>
              <div className='card-body text-left'>
                <ul>
                  <li>NodeJs/Express</li>
                  <li>MongoDB/Postgres</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
            <div className='card text-center mt-3'>
              <div className='card-header'>Front End</div>
              <div className='card-body text-left'>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>
                    React
                    <ul>
                      <li>Context API</li>
                      <li>Redux</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
          <div className='card-column'>
            <div className='card text-center mt-3 mt-md-0'>
              <div className='card-header'>Other Languages</div>
              <div className='card-body text-left'>
                <ul>
                  <li>C/C++/C#</li>
                  <li>Java</li>
                  <li>Visual Basic</li>
                </ul>
              </div>
            </div>
            <div className='card text-center mt-3'>
              <div className='card-header'>Other tools</div>
              <div className='card-body text-left'>
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
