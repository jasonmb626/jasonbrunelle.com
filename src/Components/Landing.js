import React from 'react';

const Landing = () => {
  return (
    <main class="bg-image landing-image">
      <div class="container-fluid full-width h-100">
        <div class="row header-row">
          <div class="col-12 col-md-8 col-lg-6 mt-auto text-center text-white">
            <h1>Top Skills</h1>
          </div>
        </div>
        <div class="row content-row mb-auto">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="card-column">
              <article class="card text-center">
                <div class="card-header">Back End</div>
                <div class="card-body text-left">
                  <ul>
                    <li>NodeJs/Express</li>
                    <li>NestJS (Learning)</li>
                    <li>MongoDB/Postgres/MySQL</li>
                    <li>Mongoose (ODM)</li>
                    <li>Sequelize/TypeORM (ORM)</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </article>
              <article class="card text-center mt-3">
                <div class="card-header">Front End</div>
                <div class="card-body text-left">
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React
                      <ul>
                        <li>Context API</li>
                        <li>Redux</li>
                      </ul>
                    </li>
                    <li>Mobile: React Native</li>
                    <li>Angular (Learning)</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="card-column">
              <article class="card text-center mt-3 mt-md-0">
                <div class="card-header">Other Languages</div>
                <div class="card-body text-left">
                  <ul>
                    <li>C#</li>
                    <li>Java</li>
                  </ul>
                </div>
              </article>
              <article class="card text-center mt-3">
                <div class="card-header">Other tools</div>
                <div class="card-body text-left">
                  <ul>
                    <li>Git</li>
                    <li>Microsoft&nbsp;Office</li>
                    <li>Visual Studio/VS Code</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
