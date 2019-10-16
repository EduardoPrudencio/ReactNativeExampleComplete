import {Platform} from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  margin-top: 10px;
  border-style: solid;
  border-color: #006494;
  border-width: 1px;
  border-radius: 15px;
`;

export const SecondContainer = styled.View`
  margin-left: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #247ba0;
  font-family: 'PoiretOne-Regular';
`;

export const CustomInput = styled.TextInput.attrs({
  placeholderTextColor: '#61707d',
  maxLength: 25,
})`
  margin-top: 5px;
  color: #247ba0;
  font-size: 16px;
  font-family: 'PoiretOne-Regular';
`;
