import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { rw, rh, rpx } from '../../utils/responsiveDimensions';
import { StyleSheet } from 'react-native';

export const ScreenWrapper = styled.SafeAreaView`
background-color: ${colors.screenBackground};
flex: 1;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${rh(120)};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row
`;


export const style = StyleSheet.create({
    input: {
      height: 40,
      width: 300,
      margin: 12,
      marginLeft :40,
      borderWidth: 1,
      padding: 10,
    },
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
      marginLeft :50
    }
  });

  export const Label = styled.Text`
  color: ${colors.black};
  padding-bottom: ${rh(4)};
  font-size: ${rpx(14)};
  text-align: left;
`;

  export const NameText = styled(Label)`
  margin-top: ${rh(3)};
  font-size: ${rpx(13)};
  text-align: left;
  margin-left:${rh(45)};
  
`;