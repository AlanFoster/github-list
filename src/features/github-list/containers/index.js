import React from 'react';
import List from '../components';
import { fetchTopJavaScriptRepositories } from 'api/github';

class ListContainer extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      repositories: [
      ]
    };
  }

  componentDidMount() {
    fetchTopJavaScriptRepositories()
      .then((repositories) => this.setState({ repositories }))
  }

  render() {
    return <List repositories={this.state.repositories}/>;
  }
}

export default ListContainer;
