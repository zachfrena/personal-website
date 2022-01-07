import React from 'react'
import './TimeLine.css'

function TimeLine () {
  return (
    <div className='background'>
      <div className='timeline-section'>
        <div className='time-line-header'>Timeline</div>
        <ul class='timeline'>
          <li class='timeline-event'>
            <label class='timeline-event-icon'></label>
            <div class='timeline-event-copy'>
              <p class='timeline-event-thumbnail'>May 2021 - Present</p>
              <h3>Student: Masters of Software Engineering</h3>
              <h4>University of Calgary</h4>
              <ul className='list'>
                <li>
                  Coursework: Design and Architecture, Machine Learning,
                  Advanced System Analysis, Databases, Large Scale Data
                  Analytics, etc.
                </li>
              </ul>
            </div>
          </li>
          <li class='timeline-event'>
            <label class='timeline-event-icon'></label>
            <div class='timeline-event-copy'>
              <p class='timeline-event-thumbnail'>Aug 2019 - May 2021</p>
              <h3>Software Product Manager</h3>
              <h4>Worley- Machine Learning and A.I. Solution Center</h4>
              <ul className='list'>
                <li>
                  Executed the development/deployment of multiple machine
                  learning applications, coordinating SMEs, data scientists, and
                  engineers. Exercised budget of $750,000 USD.
                </li>
                <li>
                  Leveraged Agile methodology frameworks and utilized tools like
                  Atlassian, Trello, and Jira for 2-week sprint cycles.
                </li>
                <li>
                  Responsible for market-sizing, financial and statistical
                  analysis, strategy consulting, etc. for internal and external
                  digital products.
                </li>
                <li>
                  Established training material for newly incorporated SaaS
                  product, hosting 1000+ demos which lead to adoption from 0 to
                  1500+ internal employees.
                </li>
                <li>
                  Created automated user-signup application (Selenium with
                  Python), reducing the overall time by 93% (saving
                  5000hrs/year).
                </li>
              </ul>
            </div>
          </li>
          <li class='timeline-event'>
            <label class='timeline-event-icon'></label>
            <div class='timeline-event-copy'>
              <p class='timeline-event-thumbnail'>Apr 2020 - Apr 2011</p>
              <h3>Co-Founder</h3>
              <h4>The Upskill Network</h4>
              <ul className='list'>
                <li>
                  Built purpose-driven organization to help students and young
                  professionals navigate through new challenges caused by the
                  Covid-19 pandemic.
                </li>
                <li>
                  Hosted free webinars and digital presentations featuring
                  industry professionals and global leaders.
                </li>
                <a
                  target='_blank'
                  href='https://www.facebook.com/theupskillnetwork'
                >
                  <br /> Learn more
                </a>
              </ul>
            </div>
          </li>
          <li class='timeline-event'>
            <label class='timeline-event-icon'></label>
            <div class='timeline-event-copy'>
              <p class='timeline-event-thumbnail'>May 2017 - Sep 2018</p>
              <h3>Research and Development Intern</h3>
              <h4>Engineered Air</h4>
              <ul className='list'>
                <li>
                  Led design and manufacturing of new mass-produced heat
                  exchanger, resulting in 53% weight reduction and 35% time
                  reduction.
                </li>
                <li>
                  Initiated and published scrap metal report for production
                  plant, leading to 17% reduction in total waste and 30%
                  increase in efficiency.
                </li>
              </ul>
            </div>
          </li>
          <li class='timeline-event'>
            <label class='timeline-event-icon'></label>
            <div class='timeline-event-copy'>
              <p class='timeline-event-thumbnail'>May 2014 - May 2019</p>
              <h3>Student: Bachelors in Mechanical Engineering</h3>
              <h4>University of Calgary</h4>
              <ul className='list'>
                <li>
                  Capstone: Renewable Energy Harvesting using Machine Learning
                  (Evolutionary Algorithms).
                  </li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/posts/zachary-frena_project-overview-activity-6554068106384412672-7v8h'
                  >
                    <br /> Learn more
                  </a>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TimeLine
