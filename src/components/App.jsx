import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList';
import baseContacts from '../resources/contacts.json';
import{
  TitleMain, 
  TitleList,
  CloseButton,
} from './App.styled'
import Modal from './modal/Modal';

const CONTACTS = 'contacts';
function App () {
  const [contacts, setContacts ] = useState([]);
  const [filter, setFilter ] = useState('');
  const [id, setId ] = useState('');
  const [name, setName ] = useState('');
  const [number, setNumber ] = useState('');
  const [showModal, setShowModal ] = useState(false);

useEffect(() => {
  localStorage.setItem(CONTACTS, JSON.stringify(baseContacts));
  const contactsString = localStorage.getItem(CONTACTS);
  setContacts(JSON.parse(contactsString))
}, [])

useEffect(() => {
  localStorage.setItem(CONTACTS, JSON.stringify(contacts));
}, [contacts])

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const validateExistContact = ({ contacts, values }) => {
    const messages = [];
    if (contacts.some(contact => contact.number === values.number)) {
      const user = contacts.find(
        contact => contact.number === values.number
      ).name;
      messages.push(`${values.number} is already belongs to ${user}!`);
    }
    if (contacts.some(contact => contact.name === values.name)) {
      const phone = contacts.find(
        contact => contact.name === values.name
      ).number;
      messages.push(
        `${values.name} is already containce in phonebook with phone ${phone}!`
      );
    }
    if (messages.length && !showModal) {
      alert(messages.join('\n'));
    }
    return !!messages.length;
  };

  const handleSubmit = (values, actions) => {
    if (
      validateExistContact({
        contacts,
        values,
      }) && !showModal
    ) {
      return;
    }
    let newContacts = [...contacts];
    if (id) {
      newContacts = [
        ...newContacts.filter(contact => contact.id !== id),
        {
          id,
          name: values.name,
          number: values.number,
        },
      ]
    } else {
      newContacts = [
        ...newContacts,
        {
          id: nanoid(),
          name: values.name,
          number: values.number,
        },
      ]
    }
    setContacts(newContacts);
    setId('');
    setShowModal(false);
    actions.resetForm({
      name: '',
      number: '',
    });
  };
  
  const onContactEdit = id => {
    const currentContact = contacts.find(contact => contact.id === id);
    setShowModal(!showModal);
    setId(currentContact.id);
    setName(currentContact.name);
    setNumber(currentContact.number);
  };

  const onContactDelete = id => {
    const newContacts = [...contacts];
    setContacts(newContacts.filter(contact => contact.id !== id));
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {showModal && (
          <Modal onClose={toggleModal}>
            <CloseButton onClick={toggleModal}>
              < CloseIcon/>
            </CloseButton>
            <ContactForm
              contact={{
                name, number
              }}
              handleSubmit={(values, actions) =>
                handleSubmit(values, actions)
              }
            />
          </Modal>
        )}
        <div>
          {!showModal && (
            <>
              <TitleMain>Phonebook</TitleMain>
              <ContactForm
                handleSubmit={(values, actions) =>
                  handleSubmit(values, actions)
                }
              />
            </>
          )}

          <TitleList>Contacts</TitleList>
          <Filter handleFilter={e => handleFilter(e)} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onContactEdit={id => onContactEdit(id)}
            onContactDelete={id => onContactDelete(id)}
          />
        </div>
      </div>
    );
}

export default App;