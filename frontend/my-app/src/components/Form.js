import React from 'react';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item label="Title">
            <Input placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
