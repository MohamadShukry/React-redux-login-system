import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login, logout} from '../features/userSlice'

const Login = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const changename = e => setName(e.target.value)
const changeemail = e => setEmail(e.target.value)
const changepass = e => setPassword(e.target.value)

const signup = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    dispatch(login({
        name: name,
        email: email,
        password: password,
        Islogin: true
    }));
}

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={signup}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter name"
              onChange={e=>changename(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={e=>changeemail(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={e=>changepass(e)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Login
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default Login