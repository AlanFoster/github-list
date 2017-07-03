/**
 * Following 12 factor app, we can externalise environment config
 * We can access ENV via `process.env` via a babel precompilation step
 *
 * We can change these values during a e2e test environment if we desire
 */
export default {
  github: {
    endpoint: 'https://api.github.com',
    token: process.env.REACT_APP_GITHUB_TOKEN
  }
}
