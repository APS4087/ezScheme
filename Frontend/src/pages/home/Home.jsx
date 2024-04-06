import React from 'react'
import LogoutButton from '../../components/LogoutButton.jsx';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-green-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1>Home page</h1>
      <div>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default Home