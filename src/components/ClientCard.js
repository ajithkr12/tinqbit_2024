import React from 'react';

const ClientCard = (props) =>  {
  return (

	<div className="col-md-2 col-sm-12 p-0">
		<div className="client-logo">
			<img src={props.img}/>
		</div>
	</div>
    
  );}
export default ClientCard;


