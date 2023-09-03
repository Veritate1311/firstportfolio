import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./frontend.css"; 

const Frontend = () => {
  return (
    <div className="Skills_content">
      <h3 className="skills_title" >Frontend Skills</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* Skill 1 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* Skill 3 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Basics</span>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Basics</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* Skill 5 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div className="centered-text">
              <h3 className="skills_name">GitHub</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
