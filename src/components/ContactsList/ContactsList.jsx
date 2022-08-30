import { ContactsStyledList } from './ContactsList.styled';

import { useSelector, useDispatch } from 'react-redux';
import {
  getContactOperation,
  delContactOperation,
} from 'redux/contacts/operations';
import { getContactsArray, getFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(getContactsArray);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactOperation());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const contactsItems = getVisibleContacts().map(({ name, id, phone }) => {
    return (
      <li key={id} id={id} name={name}>
        {name}: {phone}
        <button type="button" onClick={() => dispatch(delContactOperation(id))}>
          Delete
        </button>
      </li>
    );
  });

  return <ContactsStyledList>{contactsItems}</ContactsStyledList>;
};