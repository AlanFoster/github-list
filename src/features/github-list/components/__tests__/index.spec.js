import React from 'react';
import List from '../';
import renderer from 'react-test-renderer';

describe('github-list', function () {
  describe('when there is no data available', function () {
    it('renders no rows or indicator', function () {
      const repositories = [];

      const tree = renderer.create(
        <List repositories={repositories} />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('when there 2 rows of data available', function () {
    it('renders both rows', function () {
      const repositories = [
        {
          id: 1,
          name: 'first-name',
          fullName: 'first-full-name',
          description: 'first-full-description',
          htmlUrl: 'first-html-url'
        },
        {
          id: 2,
          name: 'second-name',
          fullName: 'second-full-name',
          description: 'second-full-description',
          htmlUrl: 'second-html-url'
        }
      ];

      const tree = renderer.create(
        <List repositories={repositories} />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  xdescribe('when there are multiple rows...', function () {

  });
});
