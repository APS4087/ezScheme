import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchemeRecommend } from '../../components/SchemeRecommend';

export const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/SchemeRecommend');
  }

  return (
    <div className="card container">
      <form onSubmit={handleSubmit}>
        <h1>e-Adviser for Government Assistance</h1>
        <div className='toptext'>
          <p>
            Answer a few questions to find relevant assistance schemes for your business needs</p>
          <p>  The questionnaire will take approximately 5 to 8 minutes
          </p>
        </div>
        <div className="uinput-style"></div>
        <div className='ui form'>
          <div className=''>
            <label>Business Name</label>
            <div className='input-style'>
              <input type='text' required name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Sector</label>
            <div className='input-style'>
              <input type='text'required name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Number of Years in Operation</label>
            <div className='input-style'>
              <input type='text'required name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Annual Sales Turnover(SGD)</label>
            <div className='input-style'>
              <input required type='text' name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Registerd in Singapore?</label>
            <div className='input-style'>
              <input required type='text' name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Unique Entity Number(UEN)(optional)</label>
            <div className='input-style'>
              <input type='text' name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Sub-sector</label>
            <div className='input-style'>
              <input type='text' required name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>Number of Employees</label>
            <div className='input-style'>
              <input required type='text' name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>% of Business Owned by a Singaporean or PR</label>
            <div className='input-style'>
              <input required type='text' name='username' placeholder=''></input>
            </div>
          </div>
          <div className='field'>
            <label>GST Registered Business</label>
            <div className='input-style'>
              <input required type='text' name='username' placeholder=''></input>
            </div>
          </div>
        </div>
        <div>
          <div className='input-style nextbt'>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
