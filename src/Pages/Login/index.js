import React, {useState} from 'react';
import {StatusBar, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, Content, Title, BoxLinks, TextLink, Logo} from './style';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import logo from '../../../src/assets/images/Pic.png';

export default function Login({navigation}) {
  const [textLogin, setTextLogin] = useState();
  const [textPassword, setTextPassword] = useState();

  const dispatch = useDispatch();

  const handleAddUser = () => {
    const dadosInvalidos = true;
    console.tron.log('Login: ', textLogin, 'senha: ', textPassword);

    if (dadosInvalidos) {
      Alert.alert('Dados inválidos', 'Verifique seus dados e tente novamente');
    } else if (dadosInvalidos) {
      console.tron.log(textLogin);

      Alert.alert('Deseja salvar seus dados de acesso?', null, [
        {text: 'Sim'},
        {text: 'Não'},
      ]);

      const user = {login: 'Admin', status: 'valido'};
      dispatch({
        type: 'ADD_USER',
        user,
      });
    }
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
            onChangeText={text => setTextLogin(text)}

            //closure
          />

          <TextInput
            title={'Senha'}
            placeholder={'Digite sua senha'}
            icon={'lock'}
            isPassword={true}
            onChangeText={text => setTextPassword(text)}
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
