import React, { useContext, useState } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [error,setError]=useState("")
    const [success,setSuccess] = useState("")
    const navigate=useNavigate();
    const location=useLocation();
    console.log("login page location",location);
    const from=location.state?.from?.pathname || '/'
    const auth=getAuth(app);
    const provider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()


    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value
        console.log(email,password);
        setError("");
        setSuccess("");
        setSuccess("Login successful")
        setError("Password not correct");
        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGoogleSignIn=()=>{
      signInWithPopup(auth,provider)
      .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
    const handleGithubSignIn=()=>{
      signInWithPopup(auth,githubProvider)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser)
        navigate(from,{replace:true})
      })
      .catch(error=>{
        console.log(error)
      })
    }
    return (
        <Container className="mx-auto w-25 mb-5">
        <h3 className="mt-3">Login your account</h3>
      <Form onSubmit={handleLogin} className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
         Dont have an account? <Link to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
         {success}
        </Form.Text>
        <br />
      <Form.Text className="text-danger">
         {error}
        </Form.Text>
    </Form>
    <Button onClick={handleGoogleSignIn} className='mt-3' variant="primary" type="submit">
        Login With Google
      </Button>
      <Button onClick={handleGithubSignIn} className='mt-3' variant="primary" type="submit">
        Login With Github
      </Button>
    </Container>
    );
};

export default Login;