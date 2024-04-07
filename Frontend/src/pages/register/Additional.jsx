import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAddAdditionalInfo from '../../hooks/useAdditionalInfo';

const AdditionalInfo = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    businessName: '',
    uniqueEntityNumber: '',
    sector: '',
    subSector: '',
    yearsInOperation: '',
    numberOfEmployees: '',
    annualSalesTurnover: '',
    percentageOfSingaporePROwned: '',
    registeredInSingapore: '',
    GSTRegisteredBusiness: ''
  });

  const { loading, addingInfo} = useAddAdditionalInfo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addingInfo(additionalInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>Additional Information</h1>
        <p style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Provide additional information</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          {Object.keys(additionalInfo).map((key) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</label>
              <input
                type='text'
                placeholder={`Enter ${key}`}
                style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                required
                value={additionalInfo[key]}
                onChange={(e) => setAdditionalInfo({ ...additionalInfo, [key]: e.target.value })}
              />
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <Link to="/login" style={{ fontSize: '1.2rem', color: '#007bff', textDecoration: 'none', marginBottom: '1rem' }}>Have an account?</Link>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }} disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Start without registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfo;
