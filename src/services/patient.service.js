import axios from '../helpers/axios-intercepter';
const querystring = require('querystring');

const create = (data) => {
  //post to endpoints

  const {
    firstName,
    lastName,
    phone,
    email,
    age,
    gender,
    locationX,
    locationY,
    district,
    dateTime,
  } = data;

  const details = {
    firstName,
    lastName,
    phone,
    email,
    age,
    gender,
    locationX,
    locationY,
    district,
    dateTime,
  };

  const requestOptions = {
    method: 'post',
    url: `patients/patient`,
    data: querystring.stringify(details),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  return axios(requestOptions)
    .then((patient) => {
      return patient;
    })
    .catch((error) => console.log(error));
};

const getById = (id) => {
  const requestOptions = {
    method: 'get',
    url: `patients/patient?id=${id}`,
    //data: querystring.stringify(id),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  return axios(requestOptions)
    .then((patient) => {
      return patient;
    })
    .catch((error) => console.log(error));
};

const deleteById = (id) => {};

const updateById = (id) => {};

const getAll = () => {};

const getByHospitalId = (id) => {};

const getBySeverity = (severity) => {};

export const patientService = {
  create,
  getById,
};
