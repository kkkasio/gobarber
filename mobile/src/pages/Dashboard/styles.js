import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
