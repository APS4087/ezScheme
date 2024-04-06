import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAddAdditionalInfo from '../../hooks/useAdditionalInfo';

const AdditionalInfo = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    businessName: '',
    uniqueEntityNumber: '',
    sector: '',
    subSector: '',
    yrsInOperation: '',
    numberOfEmployees: '',
    annualSalesTurnover: '',
    percentageOfSingapore_PR_owned: '',
    registered_in_sg: '',
    GST_registered_business: ''
  });

  const { loading, addingInfo} = useAddAdditionalInfo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addingInfo(additionalInfo);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-green-300 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Additional Information</h1>
            <p className='py-6'>Provide additional information</p>
            <img src='/additionalInfoIcon.svg' alt='Additional Info Image' className='max-w-60 h-auto' />
          </div>
          <form className='card-body flex flex-col md:flex-row md:flex-wrap gap-4' onSubmit={handleSubmit}>
            {Object.keys(additionalInfo).map((key) => (
              <div key={key} className='flex flex-col w-full md:w-1/2 lg:w-1/3'>
                <label className='label'>
                  <span className='label-text'>{key}</span>
                </label>
                <input
                  type='text'
                  placeholder={`Enter ${key}`}
                  className='input input-bordered'
                  required
                  value={additionalInfo[key]}
                  onChange={(e) => setAdditionalInfo({ ...additionalInfo, [key]: e.target.value })}
                />
              </div>
            ))}
            
            
            <div className='w-full flex flex-col items-center'>
            <div className="text-left w-full mb-4">
                <Link to="/login" className="text-blue-500 hover:text-blue-700">Have an account!</Link>
            </div>
            <button className='btn btn-block btn-sm border border-slate-700 py-2 px-4' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : 'Start without registration'}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
