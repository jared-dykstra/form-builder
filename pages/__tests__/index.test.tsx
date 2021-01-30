import renderer, { act } from 'react-test-renderer'
import { IndexPage } from '../index'

describe('Index page', () => {
  it('should match the snapshot', async () => {
    const tree = renderer.create(<IndexPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
