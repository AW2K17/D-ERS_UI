import React, { useState } from 'react';
import { Image, Button, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Constant from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Minicard from './Minicard';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddExercise from './AddExercise';

const Stack = createStackNavigator();

const Search = ({ navigation }) => {

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



    const [check, setCheck] = useState('false');


    const [title, setTitle] = useState('');
    const [albumId,setAlbumId]=useState('&albumId=3');
    
    var filters=[disp1,disp2,disp3,disp4];
    var add=[title,albumId];




    const link = 'http://localhost:3020/api-gateway/current-user/exercise/';
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
    
      function Check2(){

        if(disp2=='false')
        { 
            setDisp2('true');
            setShow2('true');
            
        }

        else if(disp2=='true')
        { 
            setDisp2('false');
            setShow2('false');
            
        }
    }
    
    
    function Check3(){

        if(disp3=='false')
        { 
            setDisp3('true');
            setShow3('true');
            
        }

        else if(disp3=='true')
        { 
            setDisp3('false');
            setShow3('false');
            
        }
    }
    
    
    function Check4(){

        if(disp4=='false')
        { 
            setDisp4('true');
            setShow4('true');
            
        }

        else if(disp4=='true')
        { 
            setDisp4('false');
            setShow4('false');
            
        }
    }







    function fetchData() {
        
        /*
             for(var i=0;i<2;i++)
        { 
            if(filters[i]==='true'){

                link1=link1+add[i];
            }
        }
        
        
        
        
        
        
        */
        
        
        
        
        
        
        

        // fetch(link, {credentials: "include"}).then((e) => e.json().then((f) => console.log(f)));    
        // if(show1=='true'){
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMiniCard(data)
                setD(data.exercise)
                console.log(miniCard)
                console.log(d)
            }).catch((error) => {
                console.log(error)
            });


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
        <View style={{ marginTop: Constant.statusBarHeight }}>
            <View style={{ flexDirection: 'row' }}>

                <TextInput
                    value={result}
                    style={{ backgroundColor: 'silver', width: 280, height: 29, marginLeft: 9, marginTop: 5 }}
                    placeholder={'Search Here'}
                    onChangeText={(text) => setResult(text)}
                />
                <MaterialCommunityIcons name="send" size={24} style={{ marginTop: 6, marginLeft: 12 }} color="black" onPress={fetchData} />
            </View>

            <View style={{ marginTop: 9, marginLeft: 8, flexDirection: 'row' }}>
                <Text>Biceps</Text>
                <TouchableOpacity onPress={Check1}>
                    <MaterialIcons name={disp1 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Triceps</Text>
                <TouchableOpacity onPress={Check2}>
                    <MaterialIcons name={disp2 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Lats</Text>
                <TouchableOpacity onPress={Check3}>
                    <MaterialIcons name={disp3 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Chest</Text>
                <TouchableOpacity onPress={Check4}>
                    <MaterialIcons name={disp4 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

            </View>

            {/* <Minicard/>
            <Minicard/>
            <Minicard/> */}
            {/* <Text>{show}</Text> */}


            <FlatList

                data={d}
                renderItem={({ item }) => (
                    <Minicard>
                            {/* <Image source={{ uri: item.url }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <Text style={{ marginLeft: 20 }}>{item.exerciseName}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AddExercise', item)}>
                                <Text>Add</Text>
                                </TouchableOpacity>
                        </Minicard>


                )}
            />

        </View>

    );
}

export const SearchScreen = ({ navigation }) => {

    return (
        
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddExercise"
                    component={AddExercise}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        
    );
}


export default SearchScreen;
