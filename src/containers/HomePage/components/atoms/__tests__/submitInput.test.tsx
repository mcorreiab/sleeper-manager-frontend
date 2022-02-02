import renderer from 'react-test-renderer';
import SubmitInput from '../submitInput';


it('should render the input without props', () => {
    const tree = renderer.create(<SubmitInput />).toJSON();
    expect(tree).toMatchSnapshot();
});