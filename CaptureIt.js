import React, { useState, useEffect } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import Example from './example';

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

var galleryCount = 0;
var cameraCount = 0;

const photos = {
  frontPose: "",
  backPose: ""
};

const CaptureIt = () => {
  const [source, setSource] = useState({});
  const [msg, setMsg] = useState("First take photo of front pose");

  const pickImageFromGallery = async () => {
    // if (Platform.OS !== 'web') {
    //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert('Sorry, we need gallery permissions to make this work!');
    //   }
    //   else {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // setImage(result.uri);
      // photos.backPose = result.uri;
      
      console.log("Back pose", photos.backPose);
      setMsg("Now click Upload button");
    }
   
    const uri = 'file://' + result.uri;
    const type = 'image/jpg';
    const name = result.uri.substring(102);
    const src = {
      uri,
      type,
      name
    }
    console.log(src);
    // setSource(src);
    cloudinaryUpload(src);

    //   }
    // }
  }

  const pickImageFromCamera = async () => {

    // if (Platform.OS !== 'web') {
    //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert('Sorry, we need camera roll permissions to make this work!');
    //   }
    //   else {

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result.uri.substring(168));

    console.log(result)

    if (!result.cancelled) {
      // photos.backPose = result.uri;
      console.log("Back pose", photos.backPose);
      setMsg("Now click Upload button");
    } 
    const uri = 'file://' + result.uri;
    const type = 'image/jpg';
    const name = result.uri.substring(102);

    const src = {
      uri,
      type,
      name
    }
    // setSource(src);
    cloudinaryUpload(src);


    // }
    // }
  };


  const cloudinaryUpload = (src) => {
    const data = new FormData()
    data.append('file', src)
    data.append('upload_preset', 'mubashir')
    data.append("cloud_name", "dhqfhpemf")
    axios.post("https://api.cloudinary.com/v1_1/dhqfhpemf/image/upload", data, { withCredentials: true })
      .then(res => {
        console.log("CLoudinary uploaded", res.data.url)
      
          photos.frontPose = res.data.url;

      
       
          
        

      }).catch(err => {
        alert(err)
      })
  }

  const backendRequest = () => {
    console.log("back");
    console.log(photos);
    axios.post("http://192.168.0.102:3400/api-gateway/current-user/muscle/addPhotos", {photos}, { withCredentials: true })
      .then(res => {
        console.log("Backend request", res);
      })
      .catch(err => {
        console.log("request failed", err);
      });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImageFromCamera} style={{ width:260,height:60,marginBottom: 30, backgroundColor: '#802626', borderRadius: 25, padding: 10,justifyContent: 'center',alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Capture From Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImageFromGallery} style={{width:260,height:60,marginBottom: 30, backgroundColor: '#802626', borderRadius: 25, padding: 10,justifyContent: 'center',alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Upload From Gallery</Text>
      </TouchableOpacity>


      {/* {photos.frontPose !== "" && <Image source={{ uri: photos.frontPose }} style={{ width: 200, height: 200 }} />} */}

      {/* <Text style={{fontSize:24}}>{msg}</Text> */}


      
       <TouchableOpacity onPress={backendRequest} style={{width:260,height:60,marginBottom: 30, backgroundColor: '#802626', borderRadius: 25, padding: 10,justifyContent: 'center',alignItems: 'center',marginTop:20 }}>
          <Text style={{ color: 'white' }}>Upload</Text>
        </TouchableOpacity>
      
    </View>
  );
}

export default CaptureIt;

