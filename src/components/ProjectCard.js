import React from 'react';

const ProjectCard = (props) =>  {
    const{img,title,description,clientName}=props
  return (

    <div class="col-1-of-3 col-md-4">
    <div class="card">
      <div class="card__side card__side--front-2" style={{ backgroundImage: `url("${img}")`,}}>
        
          <div class="card__heading-box">
            <h1 class="m-0 p-3">{title}</h1>
          </div>
    

      </div>
      <div class="card__side card__side--back card__side--back-2">
        <div class="card__details">
          <p>{description}</p>

        </div>

      </div>
    </div>
  </div>
    
  );}
export default ProjectCard;


