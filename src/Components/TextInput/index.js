import React, {useState} from 'react';
import {Container, SecondContainer, Title, CustomInput} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TextInput({
  title,
  placeholder,
  icon,
  isPassword,
  onChangeText,
}) {
  return (
    <>
      <Container>
        <Icon name={icon} size={20} color="#006494" />
        <SecondContainer>
          <Title>{title}</Title>
          <CustomInput
            placeholder={placeholder}
            secureTextEntry={isPassword}
            onChangeText={onChangeText}
          />
        </SecondContainer>
      </Container>
    </>
  );
}
