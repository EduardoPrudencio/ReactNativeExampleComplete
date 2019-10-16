import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #13293d;
`;

export const Content = styled.View`
  width: 80%;
  height: 70%;
  margin-top: 100px;
  background-color: #13293d;
`;

export const BoxLinks = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  border-bottom-color: #333333;
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  color: #cecece;
  font-size: 28px;
  align-self: center;
  font-family: 'PoiretOne-Regular';
  font-weight: bold;
  margin-bottom: 50px;
`;

export const TextLink = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
  font-family: 'PoiretOne-Regular';
`;

export const Logo = styled.Image`
  align-self: center;
`;
