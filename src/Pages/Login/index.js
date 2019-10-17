import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, Content, Title, BoxLinks, TextLink, Logo} from './style';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import logo from '../../../src/assets/images/Pic.png';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const user = {login: 'Admin', senha: 'Admoin2526'};
    dispatch({
      type: 'ADD_USER',
      user,
    });
  };

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
            title={'Senha'}
            placeholder={'Digite sua senha'}
            icon={'lock'}
            isPassword={true}
          />

          <BoxLinks>
            <TouchableOpacity>
              <TextLink style={{color: '#aa2440'}}>Esqueci a senha</TextLink>
            </TouchableOpacity>
            <TextLink> ou </TextLink>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <TextLink style={{color: '#40bfc1'}}>Criar conta</TextLink>
            </TouchableOpacity>
          </BoxLinks>
          <TouchableOpacity onPress={handleAddUser}>
            <Button text={'Login'} />
          </TouchableOpacity>
        </Content>
      </Container>
    </>
  );
}
