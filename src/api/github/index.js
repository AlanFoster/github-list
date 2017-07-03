/**
 * This file represents the 'services' provided by Github
 * In a larger application there will more than likely be a larger split
 * of differences between API and services
 */

import client from './client';
import _ from 'lodash';

// TODO: We can extract and test this in isolation
const mapRepositoriesResponse = function (response) {
  const repositories = response.data.items;
  return _.map(repositories, function (repository) {
    return {
      id: repository.id,
      fullName: repository.full_name,
      description: repository.description,
      htmlUrl: repository.html_url
    }
  });
};

// Unfortunately rule of threes until there's a known usecase for
// Generic arguments that can use this in a more generic way
export const fetchTopJavaScriptRepositories = function () {
  return client
    .get('/search/repositories', {
      params: {
        sort: 'stars',
        q: 'javascript',
        per_page: 10,
        page: 1
      }
    })
    .then(mapRepositoriesResponse);
};
