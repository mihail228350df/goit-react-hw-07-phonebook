import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContactsArray } from '../../redux/contacts/slice';

import { StyledForm, ErrorText } from './MyForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

export const MyForm = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(getContactsArray);

  const addConntacts = value => {
    const nameLowerCase = value.name.toLowerCase();

    const newContact = contactsArray.find(
      contact => contact.name.toLocaleLowerCase() === nameLowerCase
    );

    if (newContact) {
      window.alert(`${value.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(value));
  };

  return (
    <Formik
      initialValues={{ name: '', id: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        values.id = nanoid();
        addConntacts(values);
        resetForm();
      }}
    >
      <StyledForm autoComplete="off">
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage
          name="name"
          render={message => <ErrorText>{message}</ErrorText>}
        />

        <label htmlFor="number">Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage
          name="number"
          render={message => <ErrorText>{message}</ErrorText>}
        />

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};