import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth.context';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { authUser} = useAuthContext();
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const signup = async ({ firstName, lastName, userName, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      

      // No additional info in session, proceed with regular signup process
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, userName, password, confirmPassword, gender }),
      });

      if (!res.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await res.json();
      setAuthUser(data);

	//   // Check if additional info exists in session
    //   const additionalInfoFromSession = sessionStorage.getItem('additionalInfo');
	//   //console.log(additionalInfoFromSession)
    //   if (additionalInfoFromSession) {
    //     const additionalInfo = JSON.parse(additionalInfoFromSession);
	// 	console.log(additionalInfo)
    //     try {
	// 		const res = await fetch('/api/users/additional-info', {
	// 		  method: 'POST',
	// 		  headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: `Bearer ${authUser.token}`
	// 		  },
	// 		  body: JSON.stringify(additionalInfo),
	// 		});
			
	// 		console.log(res)
	// 		if (!res.ok) {
	// 		  throw new Error('Failed to save additional information to the database');
	// 		}
			
	// 		// Once the database update is successful, set the user data
	// 		const userData = { ...additionalInfo, firstName, lastName, userName, password, confirmPassword, gender };
	// 		setAuthUser(userData);
	// 		toast.success('Successfully signed up!');
	// 	  } catch (error) {
	// 		console.error('Error saving additional information to the database:', error);
	// 		toast.error('Failed to sign up. Please try again.');
	// 	  }
		  
	// 	  return;
	// 	}

      // Redirect to the additional info page
      navigate('/additional-info');
      toast.success('Successfully signed up!');
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender }) {
  if (!firstName || !lastName || !userName || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
}

export default useSignup;
