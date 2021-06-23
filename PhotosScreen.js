import React, { PureComponent, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image,Dimensions,TouchableOpacity } from 'react-native';
import axios from 'axios';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const PhotosScreen = () => {
    
    const [fp, setfp] = useState("");
    const [bp, setbp] = useState("");
    
    const pics = [
        { id: "1", src: fp},
        { id: "2", src: bp}
    ];
    async function fetchData() {
        try {
            console.log('Chalprha!')
            axios.get('http://192.168.0.102:3400/api-gateway/current-user/muscle', { withCredentials: true })
                .then((res) => {
                    console.log('pics ayi kya?');
                    console.log(res.data.photos.backPose);

                    // const { photos } = res.data.exercise[0];
                    // console.log(photos);
                    setfp(res.data.photos.frontPose);
                    setbp(res.data.photos.backPose);
                    pics[0].src = res.data.photos.frontPose;
                    pics[1].src = res.data.photos.backPose;
                    console.log('new waali pics:');
                    console.log(pics);
                }).catch((error) => {
                    console.log('DFM');
                    console.log(error);
                })


        }
        catch (err) {
            // navigation.navigate('Signin')
            console.log(err);
        }
    }


    function deleteData(){


        setfp("");
        setbp("");
    }

    useEffect(() => {
        
        fetchData();
    }, []);


    return (
        <View style={styles.container}>
            {/* <Text></Text> */}
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
            style={{ flexDirection: 'row', padding: 18, backgroundColor: '#BF243D', marginLeft:252, marginTop: 140,alignItems: 'center',width: windowWidth*0.146, borderRadius: 50, height: windowHeight*0.057 }}
            onPress={()=>fetchData()}>
            <MaterialIcons name={'replay'} style={{ color: 'white' }} size={20} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{ flexDirection: 'row', padding: 18, backgroundColor: '#BF243D',marginLeft:5, marginTop: 140,alignItems: 'center',width: windowWidth*0.146, borderRadius: 50, height: windowHeight*0.057 }}
            onPress={()=>deleteData()}>
            <AntDesign name="delete" size={20} color="white" />
            </TouchableOpacity>
            </View>
            <SafeAreaView style={{paddingTop: 40}}>
                 
                <FlatList
                    data={pics}
                    
                    renderItem={({ item, index }) => (
                        <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={1.5}
            minZoom={0.5}
            zoomStep={0.25}
            initialZoom={0.9}
            bindToBorders={true}
           
            style={styles.zoomableView}
          >
                        <Image
                            source={{ uri: item.src }}
                            key={item.id}
                            style={{
                                width: 400,
                                height: 300,
                                borderWidth: 2,
                                borderColor: '#d35647',
                                resizeMode: 'contain',
                                margin: 8
                            }}
                        />
                         </ReactNativeZoomableView>
                    )}
                />
                
            </SafeAreaView>

        </View>
    );
}

export default PhotosScreen;

const styles = StyleSheet.create({
                container: {
                flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
