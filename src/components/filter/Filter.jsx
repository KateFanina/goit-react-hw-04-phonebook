import PropTypes from 'prop-types';
import {
  Input, 
  FindName 
} from './Filter.styled'

const Filter = props => {
  const { handleFilter } = props;
  return (
    <>
      <FindName>Find contact by name or number</FindName>
      <Input type="text" onChange={handleFilter} />
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;
