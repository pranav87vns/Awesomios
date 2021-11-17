import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import {addUri} from '../../actions'
import { connect } from 'react-redux';

const CameraImage = ({addUri}) => {
 
    const [CameraData,setCameraData] = useState("https://img.icons8.com/ios-glyphs/120/000000/camera.png")

        const requestCameraPermission = async () => {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: "App Camera Permission",
                message:"App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("Camera permission given");
              cameraLaunch();
            } else {
              console.log("Camera permission denied");
            }
          } catch (err) {
            console.warn(err);
          }
        };

const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res) , res.assets[0].uri);
        setCameraData( () =>
          res.assets[0].uri
        );
      }
    });
}

useEffect( () => {
  setCameraData(CameraData)
  addUri(CameraData)
},[CameraData])

  console.log("CameraData---", CameraData)
    return(
    
        <TouchableOpacity onPress={ () => requestCameraPermission()}  >
              
              <Image
          source={{ uri: CameraData }}
          style={{ width: 100, height: 100, borderRadius: 90 }}
        />
        <Text >Launch Camera</Text>
          </TouchableOpacity>
         
    )



}

const mapDispatchToProps = {
  addUri
};

export default connect(null, mapDispatchToProps)(CameraImage);