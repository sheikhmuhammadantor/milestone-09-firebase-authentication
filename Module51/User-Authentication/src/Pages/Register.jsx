import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset()
        navigate('/')
      })
      .catch(error => console.log("ErroR : ", error))
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col my-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-5">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Password" className="input input-bordered" required autoComplete="off" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <p className='mt-3'>Already have an Account ? Place <Link to="/login" className='font-semibold hover:underline'>Log In</Link></p>
            </div>
            <div className='flex justify-between gap-2'>
                <Link to="/login" className="btn my-2 btn-warning">Register With Google</Link>
                <Link to="/login" className="btn my-2 btn-accent">Register With GitHub</Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
