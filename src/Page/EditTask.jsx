import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditTask = () => {
    const navigate =useNavigate()
    const {id} =useParams()
    const editTask = (e) => {
        e.preventDefault();
        const title = e.target.title.value 
        const decription = e.target.description.value 
        const taskUpdate = {
            title: title,
            decription: decription
        }
        fetch(`http://localhost:5000/task/${id}`, {
            method: "PUT",
             headers:{
                'content-type': 'application/json',
                
              },
              body:JSON.stringify(taskUpdate)
        
        })
            .then(res => res.json())
            .then(data=>{
        if(data){
            
            toast('Update your task')
        }})
        
        navigate('/')
    }
    return (
        <div  style={{marginTop:"20vh"}}>
             <Form style={{width:"30vw",  }} className='mx-auto'onSubmit={editTask}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="task" name='title' placeholder="Give your task title" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Descript</Form.Label>
          <textarea className="form-control" name='description' placeholder="Task Description" id="floatingTextarea2" style={{height:"10vh"}}></textarea>

      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </div>
    );
};

export default EditTask;