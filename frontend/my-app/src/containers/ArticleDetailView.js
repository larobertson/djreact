import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleId = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleId}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }

  render() {
    return (
      <>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm />
      </>
    );
  }
}

export default ArticleDetail;
