import React from 'react';
import {Text} from 'react-native';
import {LButton, TextButton} from './style';

export default function Button({text}) {
  return (
    <>
      <LButton>
        <TextButton>{text}</TextButton>
      </LButton>
    </>
  );
}
