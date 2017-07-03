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

Missing UI Components:
- Empty State
- Error State
- Loading State

Desired, but missing Technologies:
- Redux
- ReduxThunk
- ReduxPersist
- SASS - Importantly BEM for namespacing

Future Components:
- (React-Virtualized)[https://github.com/bvaughn/react-virtualized]
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
