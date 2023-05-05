import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("")
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,photo,email,password);
        
        setError("");
        if(password.length<6){
          setError("Password should be 6 characters")
          return;
        }
        else{
          setSuccess("Register successfully")
        }
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser)
            updateUser(result.user,name,photo)
            e.target.reset();
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    const updateUser=(user,name,photo)=>{
      updateProfile(user,{displayName:name,photoURL:photo})
      .then(()=>{console.log("Username updated successfully")})
      .catch(error=>{console.log(error.message)})
    }
  return (
    <div>
      <Container className="mx-auto w-25 mb-5">
        <h3 className="mt-3">Register your account</h3>
        <Form onSubmit={handleRegister} className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="photo"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-success">{success}</Form.Text>
          <br />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        
      </Container>
    </div>
  );
};

export default Register;
