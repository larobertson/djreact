import React from 'react';
import Articles from '../components/Article';
import CustomForm from '../components/Form';
import axios from 'axios';

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  getData() {
    axios.get('http://127.0.0.1:8000/api/').then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.articles !== prevState.articles) {
      this.getData();
    }
  }

  render() {
    return (
      <>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an article</h2>
        <CustomForm
          requestType="post"
          articleId={null}
          btnText="Create"
          getData={this.getData.bind(this)}
        />
      </>
    );
  }
}

export default ArticleList;
