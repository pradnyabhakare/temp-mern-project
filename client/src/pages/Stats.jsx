import React from 'react';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {
      monthlyApplications?.length > 0 && (<ChartsContainer data={monthlyApplications} />)
      }
    </>
  );
};
export default Stats;
