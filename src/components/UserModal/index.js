import React, { useEffect, useState } from 'react';
import {
  Modal , Text, View, TouchableOpacity, Button, SafeAreaView, StyleSheet, TextInput, Picker
} from 'react-native';
import {ScreenWrapper, ModalContainer, ButtonContainer, style, NameText, container} from './styles'
import CameraImage from './CameraImage'
import inventory from '../../screens/Inventory/inventory.json'
import { connect } from 'react-redux';
import {addInventory} from '../../actions'

const UserModal = (props) => {
    
    const {input} = style;
    const [ntext, onChangenText] = useState('');
    const [vtext, onChangevText] = useState('');
    const [dtext, onChangedText] = useState('');
    const [selectedValue, setSelectedValue] = useState("Select");
    const [cameraData,setcameraData] = useState('');
    const [ismodal,setisModal] = useState(false);

    const validateAdd = () => {
     
        if(ntext.length > 0 && vtext.length > 0 && dtext.length > 0 
          && props.camerauri.uri.length > 0){

          let data = {"id": (inventory.length + 1),
           "name": ntext,
           "purchasePrice": vtext,
           "description": dtext,
           "type": selectedValue,
           "photo": props.camerauri.uri
        } 
        console.log("data",data)
        inventory.push(data);
        console.log("newdata",inventory)
        props.addInventory(inventory);
        setisModal(false);
        props.settingModal()
          }else{
            alert('Please enter below fields')
          }
    }

    useEffect(() => {
      //setisModal(false);

    },[ismodal])

    useEffect(() => {
      setisModal(props.visible);

    },[props.visible])

    console.log ("reduxstore" , props.camerauri ,props.visible);

   return(
    <SafeAreaView>
    <Modal animationType="slide" transparent={false} visible={ismodal}>

    <ButtonContainer>
    <Button
        title="Cancel"
        onPress={() => setisModal(false)}
      />
       <CameraImage />
    <Button
        title="Add item"
        onPress={() => validateAdd()}
      />
    
    </ButtonContainer>
   
    
    <ModalContainer>
        <NameText>Name</NameText>
    <TextInput
        style={input}
        onChangeText={value => {onChangenText(value)}}
        placeholder="enter name"
      />
         <NameText>Category</NameText>
        <View style={container}>
      <Picker
        selectedValue={selectedValue}
        style={{ marginLeft:40, height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Jewellery" value="Jewellery" />
        <Picker.Item label="Music Instrument" value="Music Instrument" />
        <Picker.Item label="other" value="others" />
      </Picker>
      </View>
      <NameText>Value</NameText>
    <TextInput
        style={input}
        onChangeText={value => {onChangevText(value)}}
        placeholder="enter value"
        keyboardType="numeric"
      />
         <NameText>Description</NameText>
    <TextInput
        style={input}
        onChangeText={value => {onChangedText(value)}}
        placeholder="Optional"
      />


    </ModalContainer>
    </Modal>
    </SafeAreaView>
   )
}
const mapStateToProps = (store) => ({

    camerauri : store.uri
  
  
  })

const mapDispatchToProps = {
  addInventory
  };



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserModal);
