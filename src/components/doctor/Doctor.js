import React from 'react';
import DailyStatCards from '../stats/DailyStatCards';
import PatientByHospital from './PatientByHospital';

function Doctor() {
  return (
    <>
      <h1>Doctor</h1>
      <DailyStatCards />
      <PatientByHospital />
    </>
  );
}

export default Doctor;
