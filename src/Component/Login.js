import React, { useState } from "react";
import { Button, FormGroup, FormControl,Form } from "react-bootstrap";
import "../Styles/Login.css";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory()
  console.log(history)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
    <Button onClick={()=>history.push('/myregisteration')}>
      Registeration</Button>

      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <Form.Label>Email</Form.Label>
          <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          <Form.Label>Password</Form.Label>
          <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit" onClick={()=>history.push('/mydashboard')}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login