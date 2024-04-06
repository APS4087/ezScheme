import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignUp';


const SignUp = () => {
  
  const [userSignUpInput, setUser] = useState({
    firstName : '',
    lastName : '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();


  const handleCheckBoxChange = (gender) => {
    setUser({...userSignUpInput, gender});
    
  }
  const handleSubmits = async (e) => {
    e.preventDefault();
    //console.log(userSignUpInput);
    await signup(userSignUpInput);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 bg-green-300 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border"> 
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now! </h1>
                    <p className="py-6">Get Started with the Next Gen Chat App</p>
                    <img src="/registerIcon.svg" alt="Sign Up Image" className="max-w-60 h-auto" />
                </div>        
                <form className="card-body" onSubmit={handleSubmits}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" placeholder="Bill" className="input input-bordered" required value={userSignUpInput.firstName} onChange={(e)=> setUser({...userSignUpInput, firstName: e.target.value})} />
                   
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" placeholder="Zhang" className="input input-bordered" required value={userSignUpInput.lastName} onChange={(e) => setUser({...userSignUpInput, lastName: e.target.value})} />
                    
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input type="text" placeholder="bill_Zhang" className="input input-bordered" required value={userSignUpInput.userName} onChange={(e) => setUser({...userSignUpInput, userName: e.target.value})}/>
                 
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password" className="input input-bordered" required value={userSignUpInput.password} onChange={(e) => setUser({...userSignUpInput, password: e.target.value})}/>
                    
                    
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password Again" className="input input-bordered" required value={userSignUpInput.confirmPassword} onChange={(e) => setUser({...userSignUpInput, confirmPassword: e.target.value})}/>
                </div>
                <GenderCheck onCheckBoxChange = {handleCheckBoxChange} selectedGender={userSignUpInput.gender}/>
                <Link to={"/login"} className="link link-primary">Don't have an account?</Link>
                
      
                <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp
