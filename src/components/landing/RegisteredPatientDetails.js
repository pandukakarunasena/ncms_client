import { Form, Input, Button, Descriptions, message, Space } from 'antd';
import './styles/RegisterPatientDetails.css';
import { useState } from 'react';
import { patientService } from '../../services/patient.service';

function RegisteredPatientForm({ setPatient }) {
  const onFinish = async (values) => {
    console.log('Success:', values);

    //call the api to get the patient
    const patientRecord = await patientService.getById(values.serialNumber);

    if (patientRecord === undefined) {
      return message.error('Check the Serial Number Again');
    }

    if (patientRecord.data === '') {
      return message.error('Check the Serial Number Again');
    }

    console.log(patientRecord.data);
    setPatient(patientRecord.data);
    return message.success('Patient Record Found');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Serial Number"
        name="serialNumber"
        rules={[
          {
            required: true,
            message: 'Please input your serial number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" size="large">
          Get Info
        </Button>
      </Form.Item>
    </Form>
  );
}

function RegisteredPatientDetailsWindow({ patient }) {
  const {
    id,
    firstName,
    lastName,
    contact,
    age,
    gender,
    email,
    district,
    hospitalName,
    bedNo,
    locationX,
    locationY,
  } = patient;
  return (
    <div className="user_info">
      <div>
        <Descriptions
          title="Registered Patients Details"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Serial Number">{id}</Descriptions.Item>
          <Descriptions.Item label="First Name">{firstName}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{lastName}</Descriptions.Item>
          <Descriptions.Item label="Age">{age}</Descriptions.Item>
          <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
          <Descriptions.Item label="E-mail">{email}</Descriptions.Item>
          <Descriptions.Item label="Contact">{contact}</Descriptions.Item>
          <Descriptions.Item label="District">{district}</Descriptions.Item>
          <Descriptions.Item label="Hospital">{hospitalName}</Descriptions.Item>
          <Descriptions.Item label="Bed No">{bedNo}</Descriptions.Item>
          <Descriptions.Item label="Location X">{locationX}</Descriptions.Item>
          <Descriptions.Item label="Location Y">{locationY}</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}

function RegisteredPatientDetails() {
  const [patient, setPatient] = useState('');
  return (
    <div className="register_patient_main_div">
      <h1>
        {' '}
        Enter the serial number you recieved to get the current status of your
        admit process
      </h1>
      <RegisteredPatientForm setPatient={setPatient} />
      <RegisteredPatientDetailsWindow patient={patient} />
    </div>
  );
}

export default RegisteredPatientDetails;
