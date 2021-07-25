import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { loginAction } from '../Redux/Actions/login/login.action'

const Login = () => {
   const dispatch = useDispatch()
   const login = useSelector(state => state.login)
   console.log(login);
    const [email,setEmail]=React.useState();
    const [password,setPassword]=React.useState()
    
    const loginFun = (event)=>{
      event.preventDefault()
      const data = {
        email,password
      }
      dispatch(loginAction(data))
    }

    if(login.authenticate && localStorage.getItem("token")){
      return <Redirect to={"/product"}/>
  }
    return (
        <>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
        <form className="form">
          <div className="form-group">
            <input type="email" 
            placeholder="Email Address" 
            name="email" 
            value={email} 
            required 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required
              onChange={(e)=>setPassword(e.target.value)}
              
            />
          </div>
  
          <button className="btn btn-primary" onClick={(e)=>loginFun(e)}>login </button >
        </form>
        <p className="my-1">
          Don't have any account? <Link to="/signup">Sign Up</Link>
        </p>
      </>
    )
}

export default Login

