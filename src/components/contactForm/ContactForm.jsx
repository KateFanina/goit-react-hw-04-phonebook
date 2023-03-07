import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  CompleteForm,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const ContactForm = props => {
  const { handleSubmit, contact } = props;
  return (
    <Formik 
      initialValues={{
        name: contact?.name || '',
        number: contact?.number ||  '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
        <CompleteForm autoComplete="off">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">
            {contact?.name ? 'Save contact' : 'Add contact'}
          </Button>
        </CompleteForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
