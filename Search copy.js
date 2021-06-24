import React, { useState } from 'react';
import { Image, Button, View, TextInput, Text, FlatList, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import Constant from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Minicard from './Minicard';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddDiet from './AddDiet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Stack = createStackNavigator();




const SearchD = ({ navigation }) => {

    const [d, setD] = useState([]);
    const [result, setResult] = useState('');
    const [r2, setR2] = useState('');
    const [miniCard, setMiniCard] = useState([]);
    const [show1, setShow1] = useState('false');
    const [disp1, setDisp1] = useState('false');

    const [show2, setShow2] = useState('false');
    const [disp2, setDisp2] = useState('false');


    const [show3, setShow3] = useState('false');
    const [disp3, setDisp3] = useState('false');


    const [show4, setShow4] = useState('false');
    const [disp4, setDisp4] = useState('false');

    const [show5, setShow5] = useState('false');
    const [disp5, setDisp5] = useState('false');


    const [check, setCheck] = useState('false');


    const [title, setTitle] = useState('');

    var filters = [disp1, disp2, disp3, disp4, disp5];
    var add = ['&nutritionCategory=Dairy', '&nutritionCategory=Fruit', '&nutritionCategory=Vegetable', '&nutritionCategory=Grains'];


    var link = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?' ;
    const link1 = 'https://jsonplaceholder.typicode.com/photos?q=' + result;
    const link2 = link1 + '&title=' + title;


    function Check1() {

        if (disp1 == 'false') {
            setDisp1('true');
            setShow1('true');

        }

        else if (disp1 == 'true') {
            setDisp1('false');
            setShow1('false');

        }
    }

    function Check2() {

        if (disp2 == 'false') {
            setDisp2('true');
            setShow2('true');

        }

        else if (disp2 == 'true') {
            setDisp2('false');
            setShow2('false');

        }
    }


    function Check3() {

        if (disp3 == 'false') {
            setDisp3('true');
            setShow3('true');

        }

        else if (disp3 == 'true') {
            setDisp3('false');
            setShow3('false');

        }
    }


    function Check4() {

        if (disp4 == 'false') {
            setDisp4('true');
            setShow4('true');

        }

        else if (disp4 == 'true') {
            setDisp4('false');
            setShow4('false');

        }
    }

    function Check5() {

        if (disp5 == 'false') {
            setDisp5('true');
            setShow5('true');

        }

        else if (disp5 == 'true') {
            setDisp5('false');
            setShow5('false');

        }
    }

    function fetchData() {


        if(result===''){

            var link = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?';


        for (var i = 0; i < 5; i++) {
            if (filters[i] === 'true') {
                link = link + add[i];
                console.log(add[i]);
            }
        }
        console.log('Aya:');
        console.log(link);


        // fetch(link, {credentials: "include"}).then((e) => e.json().then((f) => console.log(f)));    
        // if(show1=='true'){
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMiniCard(data)
                setD(data.nutrition)
                console.log(miniCard)
                console.log(d)
            }).catch((error) => {
                console.log(error)
            });

        }

        else {
            
            
            
                setResult(result.toLowerCase());
            
                
                
                
                if(result==='okra' || result==='broccoli' || result==='carrot'){
                var linkX = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?'
                linkX=linkX+add[2];

                //console.log('saib');
                fetch(linkX)
            .then(response => response.json())
            .then(data => {
                console.log('pic nai ayi')
                console.log(data)
                setMiniCard(data)
                setD(data.nutrition)
                console.log(miniCard)
                console.log(d)
            }).catch((error) => {
                console.log(error)
            });
        }
             else if(result==='Fruit' || result==='fruit' || result==='apple' || result==='mango' || result==='banana'){
                
                var linkX = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?'
                linkX=linkX+add[1];
                fetch(linkX)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setMiniCard(data)
                    setD(data.nutrition)
                    console.log(miniCard)
                    console.log(d)
                }).catch((error) => {
                    console.log(error)
                });









            }
            else if(result==='milk' || result==='Milk' || result==='MILK' || result==='cheese' || result==='yogurt'){
                
                var linkX = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?'
                linkX=linkX+add[0];
                fetch(linkX)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setMiniCard(data)
                    setD(data.nutrition)
                    console.log(miniCard)
                    console.log(d)
                }).catch((error) => {
                    console.log(error)
                });









            }else if(result==='rice' || result==='oats'){
                
                var linkX = 'http://192.168.0.102:3030/api-gateway/current-user/nutritionFact/?'
                linkX=linkX+add[4];
                fetch(linkX)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setMiniCard(data)
                    setD(data.nutrition)
                    console.log(miniCard)
                    console.log(d)
                }).catch((error) => {
                    console.log(error)
                });









            }
        
        }
        // }
        // else if(show1=='false'){

        // fetch(link1)
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log(data)
        //         setMiniCard(data)
        //         console.log(miniCard)

        //     }).catch((error) => {
        //         console.log(error)
        //     });


        // }

    }

    return (
        <ScrollView>
        <View style={{ marginTop: Constant.statusBarHeight }}>
            <View style={{ flexDirection: 'row',marginLeft:windowWidth*0.04562 }}>
                <Ionicons name="arrow-back" size={30} color="black"
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 3, marginLeft: 12 }}
                />
                <TextInput
                    value={result}
                    style={{borderRadius: 20, backgroundColor: 'silver', width: 260, height: 36, marginLeft: windowWidth*0.0114, marginTop: 5, padding: 10 }}
                    placeholder={'Search Here'}
                    onChangeText={(text) => setResult(text)}
                />
                <Ionicons name="search" size={30} style={{ marginTop: 4, marginLeft: windowWidth*0.01520 }} color="black" onPress={fetchData} />
            </View>

            <View style={{ marginTop: 10, marginLeft: windowWidth*0.117, flexDirection: 'row' }}>
                <Text>Dairy</Text>
                <TouchableOpacity onPress={Check1}>
                    <MaterialIcons name={disp1 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Fruit</Text>
                <TouchableOpacity onPress={Check2}>
                    <MaterialIcons name={disp2 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Vegetable</Text>
                <TouchableOpacity onPress={Check3}>
                    <MaterialIcons name={disp3 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Grains</Text>
                <TouchableOpacity onPress={Check4}>
                    <MaterialIcons name={disp4 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>
{/* 
                <Text style={{ marginLeft: 8 }}>Tumeric</Text>
                <TouchableOpacity onPress={Check5}>
                    <MaterialIcons name={disp5 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity> */}

            </View>

            {/* <Minicard/>
            <Minicard/>
            <Minicard/> */}
            {/* <Text>{show}</Text> */}

            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}

                <FlatList

                    data={d}
                    renderItem={({ item }) => (
                        <Minicard style={{flex:1,width:null}}>
                            <Image source={{ uri: item.photos.photosUrl[0] }} style={{ borderRadius:16,width: 90, height: 80, marginLeft: windowWidth*0.040 }} />

                            <Text style={{ fontSize: 13.5,flex:0.81, marginLeft: windowWidth*0.0253 }}>{item.nutritionName}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AddDiet', item)}
                                style={{ flexDirection: 'row', padding: 10, backgroundColor: '#BF243D', marginLeft: 60, width: 100, borderRadius: 20, height: 42 }}>
                                <MaterialIcons name={'add'} style={{ marginRight: 10, color: 'white' }} size={22} />
                                <Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
                            </TouchableOpacity>
                        </Minicard>
                    )}
                />
        </View>
            </ScrollView>

    );
}

export const SearchScreen = ({ navigation }) => {

    return (

        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen
                name="Search"
                component={SearchD}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddDiet"
                component={AddDiet}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    );
}


export default SearchScreen;