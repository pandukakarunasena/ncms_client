import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const PatientIdModal = ({ patientId }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        title="SERIAL CODE"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>
          KEEP THIS SERIAL CODE WITH YOU TO ACCESS THE BOOKING DETAILS LATER
        </p>
        <h1>{patientId}</h1>
      </Modal>
    </>
  );
};

export default PatientIdModal;
