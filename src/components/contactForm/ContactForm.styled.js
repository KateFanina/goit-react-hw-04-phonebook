
import styled from 'styled-components';
import {Form, Field} from 'formik';

const CompleteForm = styled(Form)`
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 20px;
  width: 300px;
`;

const Label = styled.label`
  color: #2a2a2a;
  display: grid;
  font-size: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 18px;
  &:focus {
    outline-color: #2196f3;
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 30%), 2px 0px 2px rgb(0 0 0 / 14%),
    0px 0px 3px rgb(0 0 0 / 20%);
  color: #2a2a2a;
  cursor: pointer;
  font-size: 14px;
  margin-left: 40px;
  padding: 5px;
  &:hover {
    scale: 1.2;
  }
`;

export {CompleteForm, Label, Input, Button};