import React from 'react';
import { GetAllDataButton, GetDataByIdButton, PostDataButton } from '../components/ApiButtons.js';

const HomePage = () => {
  return (
    <div>
      <h1>This page is accessible for everyone (including not authenticated users)</h1>
      <GetAllDataButton />
      <GetDataByIdButton />
      <PostDataButton />
    </div>
  );
};

export default HomePage;
