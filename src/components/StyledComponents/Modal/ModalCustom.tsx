import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal } from 'antd';

const StyledModal = styled(Modal)`
    .ant-modal-header {
        .ant-modal-title {
            color: red
        }
    }
`;

function ModalCustom() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
        <StyledModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </StyledModal>
    </div>
  )
}

export default ModalCustom