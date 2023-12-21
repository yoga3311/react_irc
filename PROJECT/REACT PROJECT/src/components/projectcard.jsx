import React from 'react';

const ProjectCard = ({  description, projectname, projectStatus, color }) => {
  return (
    <div className="card text-center align-content-center py-5 col"style={{background:color}}>
      
      <div className="card-body">
      <h3 className="card-text">{projectname}</h3>
        <p className="card-text">{description}</p>
      </div>
      <hr className="border-5" style={{borderRadius:'12px'}}/>
      <div className="mt-3  ">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">{projectStatus}</span>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
