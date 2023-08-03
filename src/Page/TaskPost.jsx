import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskPost = () => {

  const addTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value 
    const decription = e.target.description.value 
    console.log(title, decription);
    const tasks={
      title: title,
      decription :decription
    }
    
    fetch('https://task-management-backend-jt-mdnadiruzzamannibras.vercel.app/tasks',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(tasks)
    })
      .then(res => res.json())
    .then(data => {
            if(data.insertedId){
                console.log('Great add your task item')
            }
            else{
                console.error('Something is Wrong')
                
            }

        })
  }
    return (
        <div  style={{marginTop:"20vh"}}>
             <Form style={{width:"30vw",  }} className='mx-auto'onSubmit={addTask}>
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

export default TaskPost;