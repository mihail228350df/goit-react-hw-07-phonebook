import { Box, StyledTitle } from './StyledComponent';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { MyForm } from './Form/MyForm';

export function App() {
  return (
    <Box as="main" p={4}>
      <StyledTitle>Phonebook</StyledTitle>

      <MyForm />

      <StyledTitle as="h2">Contacts</StyledTitle>

      <Filter />

      <ContactsList />
    </Box>
  );
}