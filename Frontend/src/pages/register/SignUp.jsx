import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheck from './GenderCheck';
import useSignup from '../../hooks/useSignUp';

const SignUp = () => {
  const [userSignUpInput, setUserSignUpInput] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setUserSignUpInput({ ...userSignUpInput, gender });
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    console.log(userSignUpInput);
    await signup(userSignUpInput);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Sign Up Now! </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Get Started with the Next Gen Chat App</p>
          </div>
          <form style={{ width: '100%' }} onSubmit={handleSubmits}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span>First Name</span>
              </label>
              <input type="text" placeholder="Bill" style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} required value={userSignUpInput.firstName} onChange={(e) => setUserSignUpInput({ ...userSignUpInput, firstName: e.target.value })} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span>Last Name</span>
              </label>
              <input type="text" placeholder="Zhang" style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} required value={userSignUpInput.lastName} onChange={(e) => setUserSignUpInput({ ...userSignUpInput, lastName: e.target.value })} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span>Username</span>
              </label>
              <input type="text" placeholder="bill_Zhang" style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} required value={userSignUpInput.userName} onChange={(e) => setUserSignUpInput({ ...userSignUpInput, userName: e.target.value })} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span>Password</span>
              </label>
              <input type="password" placeholder="Enter Password" style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} required value={userSignUpInput.password} onChange={(e) => setUserSignUpInput({ ...userSignUpInput, password: e.target.value })} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span>Confirm Password</span>
              </label>
              <input type="password" placeholder="Enter Password Again" style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} required value={userSignUpInput.confirmPassword} onChange={(e) => setUserSignUpInput({ ...userSignUpInput, confirmPassword: e.target.value })} />
            </div>
            <GenderCheck onCheckBoxChange={handleCheckBoxChange} selectedGender={userSignUpInput.gender} />
            <Link to={"/login"} style={{ fontSize: '1.2rem', textDecoration: 'none', marginBottom: '1rem' }}>Already have an account?</Link>
            <div style={{ textAlign: 'center' }}>
              <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }} disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
