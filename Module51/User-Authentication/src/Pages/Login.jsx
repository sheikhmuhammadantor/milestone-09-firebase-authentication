import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

function Login() {

  const { signInUser, googleSignIn, GitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success('Successfully Sign In !', {})
        e.target.reset()
        navigate('/')
      })
      .catch(error => {
        console.log(`ErroR : ${error}`);
        toast.error("Sign In Error !", {})
      })
  }

  const handelGoogleLogIn = () => {
    googleSignIn()
      .then(() => {
        toast.success('Successfully Sign In !', {})
      })
      .catch(error => {
        console.log(`ErroR : ${error}`);
        toast.error("Sign In Error !", {})
      })
  }

  const handelGitHubLogIn = () => {
    GitHubSignIn()
      .then(() => {
        toast.success('Successfully Sign In !', {})
      })
      .catch(error => {
        console.log(`ErroR : ${error}`);
        toast.error("Sign In Error !", {})
      })
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col my-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-5">Login now !</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLogIn} className="card-body">
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
              <label className="label">
                <button ><Link href="#" className="label-text-alt link link-hover">Forgot password?</Link></button>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Log In</button>
              <p className='mt-3'>Create a new Account ? Place <Link to="/register" className='font-semibold hover:underline'>Register</Link></p>
              <div className='flex justify-between gap-2'>
                <Link onClick={handelGoogleLogIn} className="btn my-2 btn-warning">Log In With Google</Link>
                <Link onClick={handelGitHubLogIn} className="btn my-2 btn-accent">Log In With GitHub</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
