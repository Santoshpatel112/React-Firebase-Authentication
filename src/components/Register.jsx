import React from 'react'
import {useState} from 'react';
import {auth} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {  useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const navigate=useNavigate();
  const handlesubmit= async(e)=>{
    e.preventDefault();
    try {
      const user=await createUserWithEmailAndPassword(
        auth,email,password
      )
      console.log(user);
      
      navigate('/')
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <>
      <div className="container" style={{width:"50%"}}>
        <h1 className='text-center'>React Firebase Authentication</h1>

        <div className="container my-5">
            <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} value={email}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <div className='text-center' ><button  type="submit" className="btn btn-primary"style={{width:"40%"}}>Register</button></div>
</form>
        </div>



        
      </div>
    </>
  )
}

export default Register;
