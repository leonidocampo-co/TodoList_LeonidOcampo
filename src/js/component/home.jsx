import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const	[task, setTask]=useState("");
	return (
		<div className="text-center">
			<div className="card">
				<div className="card-header">
					<input type="text" 
					className="form-control border-0" 
					id="exampleFormControlInput1" 
					placeholder="Escriba tarea.."
					value={task}	
					/>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">An item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
				</ul>
				<div className="card-footer">
   				 	Card footer
  				</div>
			</div>
		</div>
	);
};

export default Home;
