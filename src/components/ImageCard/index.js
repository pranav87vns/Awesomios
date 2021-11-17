import React from 'react';
import { View, Image , Text} from 'react-native';
import styled from 'styled-components/native';

import { rw, rh, rpx } from '../../utils/responsiveDimensions';
import colors from '../../styles/colors';

const CardWrapper = styled.TouchableOpacity`
padding-vertical: ${rh(20)};
padding-horizontal: ${rw(15)};
margin-left :${rw(10)};
margin-top :${rw(10)};
background-color: ${colors.white};
border-style: solid;
border-bottom-color: ${colors.modalBackground};
border-bottom-width: ${rw(1)};
color: ${colors.white};
flex-direction : column;
justify-content : space-between;
align-items : center;
border-radius : ${rpx(100)}
`;



const ImageCard = ({name,
    purchasePrice,  
    photo}) => {
        console.log("photo",photo)
        const style = {
            width: 160,
            height: 150,
            marginBottom: 10,
            resizeMode: 'contain',
          };
return(
<CardWrapper >
    
    <Image
    style={style}
    source={{uri: photo}}/>
    <View>
    <Text>{name}</Text>
    <Text>{purchasePrice}</Text>
    </View>

</CardWrapper>
)


}


export default ImageCard;