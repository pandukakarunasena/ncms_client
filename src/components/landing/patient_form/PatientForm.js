import React, { useState } from 'react';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { patientService } from '../../../services/patient.service';
import { Modal } from 'antd';

const { Option } = Select;

function PatientForm() {
  const [patientCreated, setPatientCreated] = useState(false);
  const [newPatientId, setNewPatientId] = useState('');
  const [dvisible, setDVisible] = useState(false);
  const [mvisible, setMVisible] = useState(false);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);

    const patient = await patientService.create(values);

    if (patient) {
      console.log(patient);
      setNewPatientId(patient.data);
      setPatientCreated(true);
      setMVisible(true);
    } else {
      //alert
      //patient creation failed
    }
  };

  const showDrawer = () => {
    setDVisible(true);
  };

  const onClose = () => {
    setDVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} size="large">
        <PlusOutlined /> CLICK HERE
      </Button>

      <>
        <Modal
          title="SERIAL CODE"
          centered
          visible={mvisible}
          onOk={() => setMVisible(false)}
          onCancel={() => setMVisible(false)}
          width={1000}
        >
          <p>
            KEEP THIS SERIAL CODE WITH YOU TO ACCESS THE BOOKING DETAILS LATER
          </p>
          <h1>{newPatientId}</h1>
        </Modal>
      </>

      <Drawer
        title="Register In the nearest hospital"
        width={720}
        onClose={onClose}
        visible={dvisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          layout="vertical"
          name="register"
          scrollToFirstError
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input placeholder="Please enter first name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input placeholder="Please enter last name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!',
                  },
                ]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="locationX"
                label="X coordinates"
                rules={[
                  { required: true, message: 'Please enter x coordinates' },
                ]}
              >
                <Input placeholder="Please enter x coordinates" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="locationY"
                label="Y coordinates"
                rules={[
                  { required: true, message: 'Please enter Y coordinates' },
                ]}
              >
                <Input placeholder="Please X coordinates" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="district"
                label="District"
                rules={[
                  { required: true, message: 'Please choose the district' },
                ]}
              >
                <Select placeholder="Please choose the district">
                  <Option value="district1">1</Option>
                  <Option value="district2">2</Option>
                  <Option value="district3">3</Option>
                  <Option value="district4">4</Option>
                  <Option value="district5">5</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: 'Please choose the dateTime' },
                ]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="24">
            <Col span="7" offset="17">
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" onClick={onClose}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default PatientForm;
