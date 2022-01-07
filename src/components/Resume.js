import React from 'react'
import './Resume.css'

function Resume () {
  return (
    <div>
      <div className='inner'>
        <section>
          <h1>Technical Skills</h1>
          <ul class='skill-set'>
            <div className='skill-category'>Languages:</div>
            <div className='skills'>
              <li>Python</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SQL</li>
            </div>
          </ul>
          <ul class='skill-set'>
            <div className='skill-category'>Architecture/Frameworks:</div>
            <div className='skills'>
              <li>SOLID design principles</li>
              <li>REST APIs</li>
              <li>Design Patterns</li>
              <li>Client-Server</li>
              <li>REACT</li>
            </div>
          </ul>
          <ul class='skill-set'>
            <div className='skill-category'>Data Science/ Data Engineering:</div>
            <div className='skills'>
              <li>Scikit-Learn</li>
              <li>PySpark</li>
              <li>Pandas</li>
              <li>Numpy</li>
            </div>
          </ul>
          <ul class='skill-set'>
            <div className='skill-category'>Tools:</div>
            <div className='skills'>
              <li>Git/GitHub</li>
              <li>Jira</li>
              <li>VS Code</li>
              <li>Confluence</li>
              <li>IntelliJ</li>
              <li>Eclipse</li>
              <li>MySQL</li>
              <li>SolidWorks</li>
              <li>DataBricks</li>
            </div>
          </ul>
        </section>
        <section className='personal-interests'>
          <h1>Personal Interests</h1>
          <ul class='interest-set'>
            <li>Hiking</li>
            <li>Sports</li>
            <li>Reading</li>
            <li>Health and Fitness</li>
            <li>Art and Design</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Resume
