import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signupAction } from '../Redux/Actions/signup/signup.action';
const Signup = () => {
  
    const [Name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("")
    const dispatch = useDispatch();
    const signup = useSelector(state => state.signup)
    console.log(signup.message,"nnnnnnnnnnnnn");
    
    const signupFun =(event)=>{
        event.preventDefault()
        const data={Name,email,password}
        dispatch(signupAction(data))
        
        
    } 
    if(signup.verify && !signup.userExist){
      return <Redirect to={'/login'} />
    }
    // if(signup.userExist){
    //   alert("hhhhhhhhhhhhhhh")
    // }
   
 
    return (
        <>
        <h1 className="large text-primary">Signup</h1>
        <p className="lead"><i className="fas fa-user"></i> Signup Into Your Account</p>
        <form className="form">
        <div className="form-group">
            <input 
            type="text" 
            placeholder="name" 
            name="name"
             value={Name} 
            required 
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input 
            type="email" 
            placeholder="Email Address" 
            name="email" value={email}
            required 
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              minLength="6"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
  
          <button  className="btn btn-primary" onClick={(e)=>signupFun(e)}>Signup</button>
        </form>
        <p className="my-1">
          you have any account? <Link to="/login">Sign In</Link>
        </p>
      </>
    )
}

export default Signup
