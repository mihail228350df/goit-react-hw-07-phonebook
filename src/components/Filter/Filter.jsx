import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/contacts/actions';
import { getFilter } from 'redux/contacts/selectors';
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
        onChange={e => dispatch(filter(e.currentTarget.value))}
      />
    </FilterStyled>
  );
};