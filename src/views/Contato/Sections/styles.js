import styled, { css } from 'styled-components';

const WhiteField = styled.div`
  background-color: #f9f9ff
  padding: 40px;
  text-align: center;
  width: 100%;
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  padding: 5px;
  margin: 20px auto;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  background-color: #fff;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #015aaa;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const LogoIcon = styled.i`
  margin: 5px 10px;
  color: #015aaa;
`;

const StyledP = styled.p`
  font-size: 16px;
  color: #9c9c9c;
`;

export {
  WhiteField,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
  LogoIcon,
  StyledP,
};
