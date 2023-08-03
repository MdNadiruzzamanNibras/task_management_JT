import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://task-management-backend-jt-mdnadiruzzamannibras.vercel.app/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => {
        
        console.error("Error fetching tasks:", error);
      });
  }, []);

    const deleteTask = (id) => {
        const url = `https://task-management-backend-jt-mdnadiruzzamannibras.vercel.app/task/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data =>
                {
                console.log(data);
             
             const remaining =tasks.filter(task => task._id !== id);
             setTasks(remaining);
            }
        )
  }

  return (
      <div className="container " style={{ marginTop: "20vh" }}>
          <h1 className="text-center my-5">Task Management</h1>
          <br />
          <Link to={`/post`}><button type="button" style={{marginLeft:"40vw"}} className="btn btn-primary mb-5">Add Task</button></Link>
      <div className="row " style={{ marginLeft:"10vw", }}>
        {tasks.map(task => (
          <div key={task._id} className="card col-lg-4 mx-3" style={{ width: "15vw", }}>
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.decription}</p>
            <Link to={`/edit/${task._id}`}><button type="button" className="btn btn-primary me-5">Edit</button></Link>
            <button type="button" className="btn btn-danger" onClick={()=>deleteTask(task._id)}>Delete</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
