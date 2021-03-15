import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import facade from 'assets/img/facade.JPG';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import {
  WhiteField,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
  LogoIcon,
  StyledP,
} from './styles';

const useStyles = makeStyles(styles);

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
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <img alt="contato" src={facade} width="100%" />
            </Grid>
          </Grid>
        </div>
      </div>
      <Grid item xs={12}>
        <WhiteField>
          <div className={classes.section}>
            <div className={classes.container}>
              <StyledFormWrapper>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <StyledP>
                      <HomeOutlinedIcon />
                      Rua Barão do Rio Branco, Nº 1481 St. Central, Anápolis GO
                    </StyledP>
                    <StyledP>
                      <PhoneOutlinedIcon />
                      62 3771-7175
                    </StyledP>
                    <StyledP>
                      <LogoIcon className={'fab fa-whatsapp'} /> 62 99347-3848
                    </StyledP>
                    <StyledP>
                      <LogoIcon className={'far fa-envelope'} />
                      contato@casafreud.com.br
                    </StyledP>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <StyledForm onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <StyledInput type="text" name="name" value={state.name} onChange={handleInput} />
                          <StyledInput type="email" name="email" value={state.email} onChange={handleInput} />
                          <StyledInput type="subject" name="subject" value={state.subject} onChange={handleInput} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <StyledTextArea name="message" value={state.message} onChange={handleInput} />
                          {error && (
                            <StyledError>
                              <p>{error}</p>
                            </StyledError>
                          )}
                          <StyledButton type="submit">Enviar Mensagem</StyledButton>
                        </Grid>
                      </Grid>
                    </StyledForm>
                  </Grid>
                </Grid>
              </StyledFormWrapper>
            </div>
          </div>
        </WhiteField>
      </Grid>
    </Box>
  );
};

export default SectionContato;
