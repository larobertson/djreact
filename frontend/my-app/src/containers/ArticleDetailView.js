import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  getData() {
    const articleId = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleId}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  handleDelete = event => {
    event.preventDefault();
    const articleId = this.props.match.params.articleID;
    axios
      .delete(`http://127.0.0.1:8000/api/${articleId}`)
      .then(() => {
        this.props.history.push('/');
        return alert(`Successfully deleted article ${articleId}`);
      })
      .catch(err => console.log('error --->', err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.article !== prevState.article) {
      this.getData();
    }
  }

  render() {
    return (
      <>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleId={this.props.match.params.articleID}
          btnText="Update"
          getData={this.getData.bind(this)}
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </>
    );
  }
}

export default ArticleDetail;
