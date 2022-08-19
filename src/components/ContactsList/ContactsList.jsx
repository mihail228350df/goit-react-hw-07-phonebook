import { ContactsStyledList } from './ContactsList.styled';

import { useSelector, useDispatch } from 'react-redux';
import {
  removeContacts,
  getContactsArray,
  getFilter,
} from '../../redux/contacts/slice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(getContactsArray);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const contactsItems = getVisibleContacts().map(({ name, id, number }) => {
    return (
      <li key={id} id={id} name={name}>
        {name}: {number}
        <button type="button" onClick={() => dispatch(removeContacts(id))}>
          Delete
        </button>
      </li>
    );
  });

  return <ContactsStyledList>{contactsItems}</ContactsStyledList>;
};