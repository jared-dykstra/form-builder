import renderer from 'react-test-renderer'
import Index from '../index'

describe('Index page', () => {
  it('should match the snapshot', async () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
