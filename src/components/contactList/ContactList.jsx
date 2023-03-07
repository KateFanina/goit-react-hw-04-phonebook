import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {
  Li, 
  Ul, 
  Paragraph, 
  DeleteButton,
  EditButton,
} from './ContactList.styled';


const ContactList = props => {
  const { 
    contacts,
    filter,
    onContactDelete,
    onContactEdit,
  } = props;
  return (
    <Ul>
      {contacts
      .filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase())
        ||  contact.number.includes(filter))
      .map(contact => (
        <Li key={contact.id}>
          <Paragraph>
            {`${contact.name}: ${contact.number}`}
          </Paragraph>
          <Tooltip title="Edit">
            <IconButton type="button" onClick={() => onContactEdit(contact.id)}>
              <EditButton color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton type="button" onClick={() => onContactDelete(contact.id)}>
              <DeleteButton color="primary" />
            </IconButton>
          </Tooltip>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
  onContactEdit: PropTypes.func.isRequired,
};

export default ContactList;
