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


import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const CaptureIt = () => {
  const [image, setImage] = useState(null);


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
          setImage(result.uri);

        }
        const uri = 'file://' + result.uri;
        const type = 'image/jpg';
        const name = result.uri.substring(168);

        const source = {
          uri,
          type,
          name
        }
        cloudinaryUpload(source);

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
          setImage(result.uri);

        }
        const uri = 'file://' + result.uri;
        const type = 'image/jpg';
        const name = result.uri.substring(168);

        const source = {
          uri,
          type,
          name
        }
        cloudinaryUpload(source);

        
      // }
    // }
  };


  const cloudinaryUpload = (image) => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mubashir')
    data.append("cloud_name", "dhqfhpemf")
    axios.post("https://api.cloudinary.com/v1_1/dhqfhpemf/image/upload", data, { withCredentials: true })
      .then(res => {
        console.log("CLoudinary uploaded", res.data.url)
        axios.post("http://192.168.0.105:3023/api-gateway/current-user/addphotos", res.data.url, {withCredentials: true})
        .then(res => {
          console.log("Backend request", res);
        })
        .catch(err => {
          console.log(err);
        });

      }).catch(err => {
        alert(err)
      })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImageFromCamera} style={{width:260,height:60,marginBottom: 30, backgroundColor: '#802626', borderRadius: 10, padding: 10,justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{color: 'white',fontSize:19,fontWeight:'100'}}>Capture Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImageFromGallery} style={{width:260,height:60, backgroundColor: '#802626', borderRadius: 10, padding: 10,justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{color: 'white',fontSize:19,fontWeight:'100'}}>Choose From Gallery</Text>
      </TouchableOpacity>

      {/* <Button title="Pick an image from camera roll" onPress={pickImageFromCamera} style={{marginBottom: 30}} /> */}
      {/* <Button title="Pick an image from gallery" onPress={pickImageFromGallery} style={{marginTop: 30}} /> */}
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
}

export default CaptureIt;