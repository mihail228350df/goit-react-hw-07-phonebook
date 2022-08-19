import { StyledList } from 'components/StyledComponent';
import styled from 'styled-components';

export const ContactsStyledList = styled(StyledList)`
  li {
    display: flex;
    justify-content: space-between;
    width: 600px;
    border: 1px solid black;
    margin: 0 auto 5px auto;
    padding: 5px;
  }
`;