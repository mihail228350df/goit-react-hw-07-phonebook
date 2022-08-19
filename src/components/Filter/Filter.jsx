import { useDispatch, useSelector } from 'react-redux';
import { chagneFilter, getFilter } from '../../redux/contacts/slice';

import { FilterStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(getFilter);

  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        value={valueFilter}
        onChange={e => dispatch(chagneFilter(e.currentTarget.value))}
      />
    </FilterStyled>
  );
};