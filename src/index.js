import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {Container, Content, Title, BoxLinks, TextLink} from './style';
import TextInput from './Components/TextInput';
import Button from './Components/Button';
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Content>
          <Title>Meus Gastos</Title>
          <TextInput
            title={'Login'}
            placeholder={'Digite seu login'}
            icon={'md-person'}
          />

          <TextInput
            title={'Senha'}
            placeholder={'Digite sua senha'}
            icon={'ios-lock'}
            isPassword={true}
          />

          <BoxLinks>
            <TouchableOpacity>
              <TextLink style={{color: '#aa2440'}}>Esqueci a senha</TextLink>
            </TouchableOpacity>
            <TextLink> ou </TextLink>

            <TouchableOpacity>
              <TextLink style={{color: '#40bfc1'}}>Criar conta</TextLink>
            </TouchableOpacity>
          </BoxLinks>
          <TouchableOpacity>
            <Button text={'Login'} />
          </TouchableOpacity>
        </Content>
      </Container>
    </>
  );
}
