import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutline from '@material-ui/icons/MailOutline';
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
  FlexDiv,
  StyledSuccess,
} from './styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(styles);

const initalState = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
};

const SectionContato = () => {
  const classes = useStyles();

  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess('');

    for (let key in state) {
      if (state[key] === '') {
        setIsLoading(false);
        setError(`Você não digitou seu ${key}`);
        return;
      }
    }
    setError('');
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const test = regex.test(state.email);

    emailjs.send('service_uqf6cfl', 'template_yewj1v9', state, 'user_spPujwnruy0f4u4hNLhB7').then(
      function(response) {
        setSuccess('Mensagem enviada com sucesso');
        setIsLoading(false);
      },
      function(error) {
        setError(`Houve um erro no envio, tente novamente`);
        setIsLoading(false);
      }
    );
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <Box>
      <Grid item xs={12}>
        <WhiteField>
          <div className={classes.section}>
            <div className={classes.container}>
              <StyledFormWrapper>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <FlexDiv>
                      <HomeOutlinedIcon />
                      <StyledP>Rua Barão do Rio Branco, Nº 1481 St. Central, Anápolis GO</StyledP>
                    </FlexDiv>
                    <FlexDiv>
                      <PhoneOutlinedIcon />
                      <StyledP>62 3771-7175</StyledP>
                    </FlexDiv>
                    <FlexDiv>
                      <LogoIcon className={'fab fa-whatsapp'} />
                      <StyledP>62 99347-3848</StyledP>
                    </FlexDiv>
                    <FlexDiv>
                      <MailOutline />
                      <StyledP>contato@casafreud.com.br</StyledP>
                    </FlexDiv>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <StyledForm onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <StyledInput
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            value={state.nome}
                            onChange={handleInput}
                          />
                          <StyledInput
                            type="email"
                            name="email"
                            placeholder="Seu email"
                            value={state.email}
                            onChange={handleInput}
                          />
                          <StyledInput
                            type="subject"
                            name="assunto"
                            placeholder="Assunto"
                            value={state.assunto}
                            onChange={handleInput}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <StyledTextArea
                            name="mensagem"
                            placeholder="Mensagem"
                            value={state.mensagem}
                            onChange={handleInput}
                          />
                          {error && (
                            <StyledError>
                              <p>{error}</p>
                            </StyledError>
                          )}
                          {success && (
                            <StyledSuccess>
                              <p>{success}</p>
                            </StyledSuccess>
                          )}
                          <StyledButton type="submit" disabled={isLoading}>
                            Enviar Mensagem {isLoading && <i className="fa fa-spinner fa-spin" />}
                          </StyledButton>
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
      <Box pb={10}>
        <div className={classes.section}>
          <div className={classes.container}>
            <Grid container>
              <Grid item xs={12}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4553.363455107112!2d-48.957526424539026!3d-16.327695144125574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6d687cf6c6f1ca5!2sCasa%20Freud!5e0!3m2!1spt-BR!2sbr!4v1616701739488!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SectionContato;
