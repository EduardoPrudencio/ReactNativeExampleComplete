import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {Container, Content, Title, BoxLinks, TextLink, Logo} from './style';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import logo from '../../../src/assets/images/Pic.png';

export default function Register({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Content>
          <Logo source={logo} style={{width: 80, height: 80}} />
          <Title>Meus Gastos</Title>
          <TextInput
            title={'Login'}
            placeholder={'Digite seu login'}
            icon={'account'}
          />

          <TextInput
            title={'Email'}
            placeholder={'Digite seu Email'}
            icon={'email'}
          />

          <TextInput
            title={'Senha'}
            placeholder={'Digite sua senha'}
            icon={'lock'}
            isPassword={true}
          />

          <TouchableOpacity>
            <Button text={'Registrar'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <TextLink style={{color: '#aa2440', alignSelf: 'center'}}>
              Já possuo cadastro
            </TextLink>
          </TouchableOpacity>
        </Content>
      </Container>
    </>
  );
}
