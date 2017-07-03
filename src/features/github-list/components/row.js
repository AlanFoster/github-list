import React from 'react';
import * as RepositoryModel from 'models/repository';
import Panel from 'components/panel';

const Row = ({repository}) => (
  <Panel>
    <div>{repository.fullName}</div>
    <div>{repository.description}</div>
  </Panel>
);

Row.propTypes = {
  repository: RepositoryModel.PropTypes.isRequired
};

export default Row;
