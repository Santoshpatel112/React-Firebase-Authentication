import React from 'react'
import {Link,useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {auth} from '../firebase'
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const navigate=useNavigate();
  const handlesubmit= async(e)=>{
    e.preventDefault();
    try {
      const user=await signInWithEmailAndPassword(
        auth,email,password
      )
      console.log(user);
      
      navigate('/home')
    } catch (error) {
      console.log(error);
      
    }

  }

const googleclick=async ()=>{

  try {

    const provider=new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
    navigate('/home');
    console.log(result);
    
    
  } catch (error) {
    console.log(error);
    
  }
}


  return (
    <>
      <div className="container" style={{width:"50%"}}>
        <h1 className='text-center'>React Firebase Authentication</h1>

        <div className="container my-5">
            <form onClick={handlesubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <div className='text-center' >
    <button type="submit" className="btn btn-primary"style={{width:"40%"}}>Login</button>

    
    </div>
    <Link to='./register'><p style={{color:"white", marginLeft:"29rem"}}>Register new user </p></Link>
</form>
        </div>



        <div className="container text-center d-flex justify-center content-center items-center" style={{display:"flex",alignContent:"center",alignItems:"center", paddingLeft:"22%"}}>
            <button 
            onClick={googleclick}
            className='btn  'style={{display:"flex", backgroundColor:"white",color:"black" }}>
                <div>
                    <img src="https://pnghq.com/wp-content/uploads/new-google-logo-png-transparent-layers-768x783.png" alt="" style={{width:"40px"}}/>
                </div>
                <div>
                    <h2 style={{fontWeight:"bold", color:"red"}}>  Login With Google</h2>
                </div>
            </button>
        </div>
      </div>
    </>
  )
}

export default Login
