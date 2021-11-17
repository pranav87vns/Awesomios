import React, { useEffect, useState } from 'react';
import { FlatList, View, SafeAreaView, TouchableOpacity, Image, Text, Button } from 'react-native';
import Modal from "react-native-modal"
import inventory from './inventory.json'
import { FlatListContainer, style, imagestyle, ScreenWrapper,Container, NameText, Icon } from './styles';
import ImageCard from '../../components/ImageCard'
import UserModal from '../../components/UserModal'
import { connect } from 'react-redux';

const Inventory = ({inventorydata}) => {
    const[inventoryData, setinventoryData] = useState(inventory);
    const [isModalVisible, setModalVisible] = useState(false);
    const { flatList } = style;

    useEffect(() => {
      if(inventorydata?.length > 0){
        setinventoryData(() => inventorydata);
      }
        console.log("inventorydata",inventorydata)
    },
    [inventorydata,isModalVisible]
    )

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    const renderItem = (item ) => {
        console.log("item",item,item.item.photo)
       return(
        <ImageCard
          name={item.item.name}
          purchasePrice = {item.item.purchasePrice}  
          photo = {item.item.photo}
          />
       )
    }
    console.log("inventory",inventorydata )
return(
    <ScreenWrapper>
        <Container>
            <NameText>Inventory</NameText>
            <TouchableOpacity onPress = {toggleModal}>
            <Image 
            style = {Icon}
            source={require('../../assets/add-icon.png')} />
        </TouchableOpacity>
        <UserModal visible={isModalVisible} settingModal = { ()=> setModalVisible(!isModalVisible)}>
        
        </UserModal>
        </Container>
     <FlatListContainer>
    {inventoryData?.length > 0 ? (
        <FlatList
          style={flatList}
          data={inventoryData}
          renderItem={
            (data) => renderItem(data)
          }
          keyExtractor={item => item.id}
          numColumns={2}
        />
    ) : null
        }    
        </FlatListContainer>   

        </ScreenWrapper>
)
}

const mapStateToProps = (store) => ({
  inventorydata : store.data
})

export default connect(
  mapStateToProps,
  null,
)(Inventory);
