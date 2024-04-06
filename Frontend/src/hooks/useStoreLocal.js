import React, { useEffect } from 'react';

const AdditionalInfo_local = () => {
    useEffect(() => {
      // Function to save additional information to local storage
      const saveAdditionalInfoToStorage = (additionalInfo) => {
        localStorage.setItem("additionalInfo", JSON.stringify(additionalInfo));
      };
  
      // Function to clear additional information from local storage
      const clearAdditionalInfoFromStorage = () => {
        localStorage.removeItem("additionalInfo");
      };
  
      // Event listener to clear additional information when the browser is closed
      window.addEventListener("beforeunload", clearAdditionalInfoFromStorage);
  
      // Cleanup function to remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener("beforeunload", clearAdditionalInfoFromStorage);
      };
    }, []); // Empty dependency array ensures that this effect runs only once

    
  
    
  };
  export default AdditionalInfo;