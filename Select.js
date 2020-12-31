import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components';
import axios from 'axios';


const data = [
    'Breakfast',
    'Lunch',
    'Dinner',
];
const SelectDayTime = ({ item }) => {

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    const displayValue = data[selectedIndex.row];

    item[0].day[0].dayTime = displayValue;
    console.log(item[0].day[0].dayTime)


    const renderOption = (title) => (
        <SelectItem title={title} />
    );


    return (
        <Layout style={styles.container}>

            <Select
                style={styles.select}
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {data.map(renderOption)}
            </Select>

            <TouchableOpacity style={{ marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}
                onPress={async () => {

                    try {
                        // .then(response => {
                        // console.log(res.data.schedulee[0].id);
                        // navigation.navigate('Search');
                        // console.log(response);

                        const res = await axios.get('http://localhost:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
                        console.log(res);
                        if (res.data.schedulenf) {
                            axios.put('http://localhost:3031/api-gateway/current-user/schedulenf/' + res.data.schedulenf[0].id, { document: item }, { withCredentials: true })
                                .then(response => {
                                    // navigation.navigate('Search');
                                    console.log(response);
                                }).catch(error => {
                                    console.log(error);
                                })

                        }
                        else {
                            axios.post('http://localhost:3031/api-gateway/current-user/nutritionschedule', { document: item }, { withCredentials: true })
                                .then(response => {
                                    // navigation.navigate('Search');
                                    console.log(response);
                                }).catch(error => {
                                    console.log(error);
                                })
                        }
                    }
                    catch (er) {
                        axios.post('http://localhost:3031/api-gateway/current-user/nutritionschedule', { document: item }, { withCredentials: true })
                            .then(response => {
                                // navigation.navigate('Search');
                                console.log(response);
                            }).catch(error => {
                                console.log(error);
                            })
                        console.log(er);
                    }

                    // }).catch(error => {
                    //   console.log(error);
                    // })


                }}
            >
                <Text style={{ color: 'white', fontSize: 19, marginLeft: 49, marginTop: 5 }}>CONFIRM CHANGES</Text>
            </TouchableOpacity>

        </Layout>
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
        margin: 2,
    },
});