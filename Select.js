import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View ,Dimensions} from 'react-native';
import { IndexPath, Datepicker, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const data = [
    'breakfast',
    'lunch',
    'dinner',
];





const SelectDayTime = ({ item }) => {

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [date, setDate] = useState(new Date());
    const displayValue = data[selectedIndex.row];

    item[0].day[0].dayTime = displayValue;
    item[0].sameDay = date.toISOString().substring(0, 10);
    
    console.log(item[0].day[0].dayTime)
    console.log(item[0].sameDay);

    const renderOption = (title) => (
        <SelectItem title={title} />
    );




    // const updateIt= async()=>{

    //     let x= await AsyncStorage.getItem('@dietOne');
    //     console.log("Cchoose:");
    
    //     // if(selectedIndex===0){
    //     // console.log(JSON.parse(x).bf);
    //     // }

    //     //let change =JSON.parse(x);
    //     if(selectedIndex.row===0){
    //         //JSON.parse(x).bf+=1;
    //         console.log("Barha:");
    //         console.log(x);
    //         //console.log()

    //      AsyncStorage.setItem('@dietOne',JSON.stringify(x));
    //     }
    //     //console.log(selectedIndex.row);
    //     else if(selectedIndex.row===1){
    //         JSON.parse(x).lnh+=1;
    //         AsyncStorage.setItem('@dietOne',JSON.stringify(x));
    //     }
    //     else if(selectedIndex.row===2){
    //         JSON.parse(x).dnr+=1;
    //         AsyncStorage.setItem('@dietOne',JSON.stringify(x));
    //     }
    // }

    return (
        <View style={styles.container}>

            <View style={{alignItems:'center'}}>
            
            <Select
                style={styles.select}
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {data.map(renderOption)}
            </Select>
            </View>

            <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 64 }}>Select Date</Text>
            <Layout level='1' style={{ flexDirection: 'row', marginTop: 13 }}>

                <Datepicker
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
            </Layout>
            </View>

            <TouchableOpacity style={{ marginTop: 35,marginLeft:-12, width:windowWidth*0.3387, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}
                onPress={async () => {

                    try {
                        // .then(response => {
                        // console.log(res.data.schedulee[0].id);
                        // navigation.navigate('Search');
                        // console.log(response);

                        const res = await axios.get('http://192.168.0.102:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
                        console.log(res);
                        if (res.data.schedulenf && res.data.schedulenf.length) {
                            axios.put('http://192.168.0.102:3031/api-gateway/current-user/schedulenf/' + res.data.schedulenf[0].id, { document: item }, { withCredentials: true })
                                .then(response => {
                                    // navigation.navigate('Search');
                                    console.log(response);
                                }).catch(error => {
                                    console.log(error);
                                })

                        }
                        else {
                            axios.post('http://192.168.0.102:3031/api-gateway/current-user/nutritionschedule', { document: item }, { withCredentials: true })
                                .then(response => {
                                    // navigation.navigate('Search');
                                    console.log(response);
                                }).catch(error => {
                                    console.log(error);
                                })
                        }
                    }
                    catch (er) {
                        // axios.post('http://192.168.1.101:3031/api-gateway/current-user/nutritionschedule', { document: item }, { withCredentials: true })
                        //     .then(response => {
                        //         // navigation.navigate('Search');
                        //         console.log(response);
                        //     }).catch(error => {
                        //         console.log(error);
                        //     })
                        console.log(er);
                    }

                    // }).catch(error => {
                    //   console.log(error);
                    // })
                    showMessage({
              message: "Added Successfully, Please Refresh",
              type: "success",
            });
            //updateIt();

                }}
            >
                <Text style={{ color: 'white', fontSize: 19, marginTop: 5,textAlign: 'center' }}>CONFIRM</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SelectDayTime;

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        height: 192,
    },
    select: {
        flex: 1,
        marginTop:-12,
        width:windowWidth*0.640,
        //marginLeft:windowWidth*0.1433,
   
      
    },
});