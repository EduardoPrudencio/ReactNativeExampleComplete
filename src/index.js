import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content} from './style';
import TextInput from './Components/TextInput';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Content>
          <TextInput
            title={'Login'}
            placeholder={'Digite seu login'}
            icon={'md-person'}
          />

          <TextInput
            title={'Senha'}
            placeholder={'Digite sua senha'}
            icon={'md-key'}
            isPassword={true}
          />
        </Content>
      </Container>
    </>
  );
}
