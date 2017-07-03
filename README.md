### Github Lister

To view the actual code changes, compare the first commit to the latest.

There is no routing mechanism present just yet.
For MVP, there is no need to only show 10 items at a time.
Lodash added for cross-browser support, we can still tree shake with babel
and webpack if needed.

Important:
- Initial CI support
- Ensuring the API call succeeds
- Basic list
- Initial strong foundations
  - pod structure
  - api separation
  - definition of models
  - Split pure components from container components
- MVP:
  - Show the list of 10 items, we could increase to >10 for true MVP
  - Only require the core information of description and repository name
  
Missing UI Components:
- Empty State
- Error State
- Loading State
- Links

Desired, but missing Technologies:
- Redux
- ReduxThunk
- ReduxPersist
- SASS - Importantly BEM for namespacing

Redux persist would help enable 'remembering' user-preferences across page
refreshes, making use of localStorage. This would be local state however.

If this requirement changed to 'remember', we would introduce a server to
maintain this state for us.

Future Components:
- [React-Virtualized](https://github.com/bvaughn/react-virtualized) - Remove the need for 'pagination' in the classical sense 
- React-bootstrap

Intentional Decisions:
- No ImmutableJS

For improved CI:
- ESlint
- Prettier
- Flow
- We can use shallow renderer for faster tests

Assumptions:

Follow a pod structure for features. Importantly using the concept of
components and containers. This will allow for an easier migration to redux.

i.e. Keeping all state at top-level components.


Running
-------

The usual suspects:

```shell
yarn
yarn run start
```
