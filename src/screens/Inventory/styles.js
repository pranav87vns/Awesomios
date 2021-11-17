import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { rw, rh, rpx } from '../../utils/responsiveDimensions';

export const FlatListContainer = styled.View`
    background-color : ${colors.lightGrey};
    flex:1;
`;

export const style = StyleSheet.create({
    flatList: {
      flex: 1,
      marginTop: 0,
    },
    imagestyle : {
        width: 10,
        height: 10,
        marginBottom: 10,
        
      }
  });

  export const ScreenWrapper = styled.SafeAreaView`
  background-color: ${colors.screenBackground};
  flex: 1;
`;

export const NameText = styled.Text`
    font-size: ${rpx(25)};
    text-align: left; 
    width : 100%;
    color: ${colors.white}; 
    position: absolute;
    margin-left : ${rw(25)};
`;

export const Container = styled.View`
  height: ${rh(50)};
  justify-content: center;
  width : 100%;
  background-color: ${colors.HeaderBackground};
  flex-direction: row;
`;

export const Icon = styled.Image`
  height: ${rh(4)};
  width: ${rw(4)};
  margin-right: ${rw(50)};
`;