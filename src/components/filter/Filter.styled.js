import styled from 'styled-components';

const Input = styled.input`
  color: #2a2a2a;
  font-size: 18px;
  margin-bottom: 20px;
  &:focus {
    outline-color: #2196f3;
  }
`;

const FindName= styled.div`
  font-size: 22px;
`;

export { Input, FindName };