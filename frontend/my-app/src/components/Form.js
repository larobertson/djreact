import React from 'react';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    console.log('title', title, 'content', content);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
