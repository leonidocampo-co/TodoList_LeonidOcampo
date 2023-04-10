import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const	[task, setTask]=useState("");
  const	[todos, setTodos]=useState(["Tarea 1", "Tarea 2"]);

  function addTask(e){
	console.log(e.code)
	if(e.code=="ENTER"){

	}	
  }

  function deltask(index){

  }

	return (
		<div className="text-center">
			<div className="card">
				<div className="card-header">
					<input type="text" 
					className="form-control border-0" 
					id="exampleFormControlInput1" 
					placeholder="Escriba tarea.."
					value={task}	
					onChange={(e)=>setTask(e.target.value)}
					onKeyDown={addTask}
					/>
				</div>
				<ul className="list-group list-group-flush">
				  {
					todos.map((todo, index)=>(<li key={index} className="list-group-item d-flex justify-content-between align-items-start">
					{todo}
					<button onClick={()=>deltask(index)} className="btn btn-danger btn-sm bg-danger rounded-pill">X</button>
					</li>))
				  }	
				</ul>
				<div className="card-footer">
   				 	Card footer
  				</div>
			</div>
		</div>
	);
};

export default Home;
