import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./backend.css"; 

const Backend = () => {
  return (
    <div className="Skills_content">
      <h3 className="skills_title">Backend Skills</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* Skill 1 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">PHP</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">Python</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* Skill 3 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">Basics</span>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">Node.js</h3>
              <span className="skills_level">Basics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
