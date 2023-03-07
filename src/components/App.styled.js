import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const TitleMain = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 0;
`;

const TitleList = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 0;
`;

const CloseButton = styled(CloseIcon)`
  grid-template-columns: 40px;
  justify-content: end;
  position: absolute;
  right: 8px;
  top: 1px;
`;


export { TitleMain, TitleList, CloseButton };