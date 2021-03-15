import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import facade from 'assets/img/facade.JPG';
import styled, { css } from 'styled-components';

const useStyles = makeStyles(styles);

const WhiteField = styled.div`
  background-color: #fff
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
  max-width: 960px;
  width: 95%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
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

const initalState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const SectionContato = () => {
  const classes = useStyles();

  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('enviado');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`Você não digitou seu ${key}`);
        return;
      }
    }
    setError('');
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const test = regex.test(state.email);
    console.log(test);

    console.log('enviado');
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <Box pt={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Grid container>
            <Grid item xs={12}>
              <img alt="contato" src={facade} width="100%" />
            </Grid>
            <Grid item xs={12}>
              <WhiteField>
                <StyledFormWrapper>
                  <h3>Rua Barão do Rio Branco, Nº 1481 St. Central, Anápolis GO</h3>
                  <h3>
                    {' '}
                    <LogoIcon className={'far fa-phone'} />
                    62 3771-7175
                  </h3>
                  <h3>
                    {' '}
                    <LogoIcon className={'fab fa-whatsapp'} /> 62 99347-3848
                  </h3>
                  <h3>
                    {' '}
                    <LogoIcon className={'far fa-envelope'} />
                    contato@casafreud.com.br
                  </h3>
                  <StyledForm onSubmit={handleSubmit}>
                    <label htmlFor="name">Seu nome</label>
                    <StyledInput type="text" name="name" value={state.name} onChange={handleInput} />
                    <label htmlFor="email">Seu email</label>
                    <StyledInput type="email" name="email" value={state.email} onChange={handleInput} />
                    <label htmlFor="subject">Assunto</label>
                    <StyledInput type="subject" name="subject" value={state.subject} onChange={handleInput} />
                    <label htmlFor="message">Mensagem</label>
                    <StyledTextArea name="message" value={state.message} onChange={handleInput} />
                    {error && (
                      <StyledError>
                        <p>{error}</p>
                      </StyledError>
                    )}

                    <StyledButton type="submit">Enviar Mensagem</StyledButton>
                  </StyledForm>
                </StyledFormWrapper>
              </WhiteField>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionContato;
