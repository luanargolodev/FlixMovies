import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: ${props => props.size}px;
  font-weight: bold;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const Rate = styled.Text`
  color: #FFF;
  font-size: 12px;
  padding-left: 4px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
  width: 85%;
  height: 30px;
  background-color: #E72F49;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 23%;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

export const ContainerBanner = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.Text`
  color: #FFF;
  padding: 16px;
  color: #FFF;
  line-height: 20px;
`;

export const BannerItem = styled.Image`
  margin-top: 10px;
  width: 30%;
  height: 170px;
  border-radius: 8px;
`;