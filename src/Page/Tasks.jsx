import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => {
        // Handle the error here, e.g., log the error or display an error message.
        console.error("Error fetching tasks:", error);
      });
  }, []);

    const deleteTask = (id) => {
        const url = `http://localhost:5000/task/${id}`
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
      <div className="row " style={{ marginLeft:"10vw", }}>
        {tasks.map(task => (
          <div key={task._id} className="card col-lg-4 mx-3" style={{ width: "15vw", }}>
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.decription}</p>
            <button type="button" className="btn btn-primary me-5">Primary</button>
            <button type="button" className="btn btn-danger" onClick={()=>deleteTask(task._id)}>Primary</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
