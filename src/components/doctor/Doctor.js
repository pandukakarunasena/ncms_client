import React from 'react';
import DailyStatCards from '../stats/DailyStatCards';
import PatientByHospital from './PatientByHospital';

function Doctor() {
  return (
    <>
      <DailyStatCards />
      <PatientByHospital />
    </>
  );
}

export default Doctor;
