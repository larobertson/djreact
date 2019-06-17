import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleId) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    this.props.getData();

    if (requestType === 'post') {
      axios
        .post('http://127.0.0.1:8000/api/', {
          title: title,
          content: content
        })
        .then(res => console.log(title, content))
        .catch(err => console.error(err));
    } else if (requestType === 'put') {
      axios
        .put(`http://127.0.0.1:8000/api/${articleId}/`, {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleId
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
