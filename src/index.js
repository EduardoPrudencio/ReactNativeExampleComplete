import React from 'react';
import {Text} from 'react-native';
import {Container} from './style';
import TextInput from './Components/TextInput';

export default function App() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
