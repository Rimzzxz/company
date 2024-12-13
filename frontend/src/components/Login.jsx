import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png"

function Login() {
  const navigate = useNavigate()
  return (
    <div className="container-fluid" style={{ backgroundColor: '#cfe2ff' }}>
      <img src={logo} alt="logo" width="80" height="80"/>
      <div className="row justify-content-center align-items-center vh-100" style={{ backgroundColor: '#cfe2ff' }}>

        <div className="col-md-5">
          <div className="card">
            <div className="card-header bg-primary">
              <h3 className='text-white'>Login</h3>
            </div>
            <div className="card-body">
           
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>navigate("main")}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;