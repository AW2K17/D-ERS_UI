import React, { useState, useEffect } from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { Button, Card, Modal } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyC_UF0doXAdGZ0fugXQeqymIHKPa4k-pvY';

export const ProgressScreen = () => {
    const [visible, setVisible] = useState(false);

    const [startLocationLatitude, setStartLocationLatitude] = useState();
    const [startLocationLongitude, setStartLocationLongitude] = useState();

    const [endLocationLatitude, setEndLocationLatitude] = useState();
    const [endLocationLongitude, setEndLocationLongitude] = useState();

    const [distance, setDistance] = useState();


    const [sTime, setStime] = useState();
    // const [eTime, setEtime] = useState(0);
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    var diff;

    const coordinates = [
        {
            latitude: startLocationLatitude,
            longitude: startLocationLongitude,
        },
        {
            latitude: endLocationLatitude,
            longitude: endLocationLongitude,
        },
    ];

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setStartLocation(location);
    //     })();
    // }, []);
    
  


    const startTime = () => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            // console.log(location)
            const { coords } = location;
            const { latitude, longitude } = coords;
            setStartLocationLatitude(latitude);
            setStartLocationLongitude(longitude);
        })();
        setDate(new Date().toISOString().substring(0, 10));
        setStime(new Date().getTime());
    };

    const endTime = async () => {
        let location = await Location.getCurrentPositionAsync({});
        const { coords } = location;
        const { latitude, longitude } = coords;
        setEndLocationLatitude(latitude);
        setEndLocationLongitude(longitude);
        // console.log(location);
        // setEndLocation(location);
        diff = new Date().getTime() - sTime;
        diff = diff / 1000;
        diff = diff / 60;
         setTime(diff);
        // console.log(time);
        const data = {
            date: date,
            running: distance,
            time: diff,
           
        }
        // console.log(sTime)
        console.log(data);
        setVisible(true);
        axios.post('http://192.168.0.105:3023/api-gateway/current-user/exercise-track/addRunning', data, { withCredentials: true })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        setStime(0);
    }

    return (

        <View style={styles.container}>

            <MapView
                region={{
                    latitude: startLocationLatitude,
                    longitude: startLocationLongitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                style={StyleSheet.absoluteFill}

            >
                {/* {(coordinates.startLocationLatitude) && (coordinates.map((coordinate, index) =>
                    <Marker key={`coordinate_${index}`} coordinate={coordinate} />
                ))} */}
                {/* <MapView.Marker coordinate={coordinates} /> */}

                {(coordinates.length == 2) && (
                    <MapViewDirections
                        origin={coordinates[0]}
                        //waypoints={(coordinates.length > 2) ? coordinates.slice(1, -1) : null}
                        destination={coordinates[coordinates.length - 1]}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="hotpink"
                        optimizeWaypoints={true}
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={result => {
                            setDistance(result.distance)
                            AsyncStorage.setItem('@runOne',JSON.stringify(result.distance))
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)

                            // this.mapView.fitToCoordinates(result.coordinates, {
                            //     edgePadding: {
                            //         right: (width / 20),
                            //         bottom: (height / 20),
                            //         left: (width / 20),
                            //         top: (height / 20),
                            //     }
                            // });
                        }}
                        onError={(errorMessage) => {
                            console.log('GOT AN ERROR');
                        }}
                    />
                )}

            </MapView>
            {/* <Text>Longitude : {startLocationLongitude}</Text>
            <Text>Latitude : {startLocationLatitude}</Text> */}

            {/* <Text>Time : {time}</Text> */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={startTime}>
                    <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={endTime}>
                    <Text style={styles.btnText}>End</Text>
                </TouchableOpacity>
                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <Text>Expected Weight: 60</Text>
                       
                        <Button onPress={() => setVisible(false)} style={{ width: 107, backgroundColor: 'red', marginLeft: 30, marginTop: 10, borderRadius: 20 }}>
                            OK
                        </Button>
                    </Card>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    map: {
        flex: 2
    },
    button: {
        padding: 10,
        width: 100,
        borderRadius: 20,
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#BF243D',
        margin: 20
    },
    btnText: {
        textAlign: 'center',
        color: 'white'
    }
});