import React from 'react';
import List from '../components';

class ListContainer extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      repositories: [
        {
          id: 28457823,
          name: 'freeCodeCamp',
          fullName: 'freeCodeCamp/freeCodeCamp',
          description: 'The https://freeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.',
          htmlUrl: 'https://github.com/freeCodeCamp/freeCodeCamp'
        },
        {
          id: 2126244,
          name: 'bootstrap',
          fullName: 'twbs/bootstrap',
          description: 'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
          htmlUrl: 'https://github.com/twbs/bootstrap'
        }
      ]
    };
  }

  render() {
    return <List repositories={this.state.repositories}/>;
  }
}

export default ListContainer;
