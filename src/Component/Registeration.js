import React ,{useState} from 'react'
import { Form,Button,Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { Redirect, Link} from 'react-router-dom';

function Registeration() {
    const [name,setName] = useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword]= useState("");
    const [age,setAge] = useState("");
    // let loggedIn=false
    function submitRegistration(e){
        e.preventDefault()
        let obj={'name':name,'email':email,'password':password,'age':age}
        localStorage.setItem("myData",JSON.stringify(obj))
        // loggedIn=true
        // console.log(loggedIn)
        
    }
    
    
    return (
        <div>
            <Container className="bg-info">
                    <Form onSubmit={submitRegistration}>
                        <h3 className="text-center text-danger">Registration</h3>
                    <Form.Group controlId="Name">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={e=>setName(e.target.value)}/>
                    </Form.Group> 
                    <Form.Group controlId="email">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} name="email" onChange={e=>setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    </Form.Group> 
                    
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" name="age" value={age} onChange={e=>setAge(e.target.value)} />
                    </Form.Group> 
                      
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    </Form>
                </Container>
        </div>
    )
}

export default Registeration
