import styled from 'styled-components';
import { Form } from 'formik';

export const ErrorText = styled.p`
  color: red;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  label {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
`;