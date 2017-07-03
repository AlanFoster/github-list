import React from 'react';
import PropTypes from 'prop-types';
import * as RepositoryModel from 'models/repository';
import RepositoryRow from './row';
import _ from 'lodash';

const List = ({ repositories }) => {
  const repositoryRows = _.map(repositories, function (repository) {
    return (
      <RepositoryRow
        key={repository.id}
        repository={repository}
      />
    );
  });

  return <div>{repositoryRows}</div>;
};

List.propTypes = {
  repositories: PropTypes.arrayOf(RepositoryModel.PropTypes)
};

export default List;
