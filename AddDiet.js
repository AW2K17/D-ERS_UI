import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Carousel, { Pagination } from 'react-native-x-carousel';
import { IndexPath, Datepicker, Layout, Select, SelectItem } from '@ui-kitten/components';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import Chart from './Chart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const AddDiet = ({ route, navigation }) => {


  const item = route.params;
  const image = { uri: item.photos.mainPhoto}

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://192.168.1.101:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
        console.log(res);

        if (res.data.schedulenf) {
          // setSc(res.data.schedulee);
          // console.log(sc);
          axios.get('http://192.168.1.101:3032/api-gateway/current-user/nutrition-schedule/count/' + res.data.schedulenf[0].id, { withCredentials: true })
            .then(response => {
              console.log(response.data.limit);
              setLimit(response.data.limit);
              // setExe(response.data.schedulee[0].document[0].day[0].exercise);
              // console.log(response.data.schedulee[0].document[0].day[0].exercise);
              // setWorkouts(response.data.schedulee[0].document[0].day[0].exercise.photos);
            }
            );
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);


  console.log(route.params);
  const DATAX = [
    { text: '#1', img: image },
    { text: '#2' },
    { text: '#3' },
  ];


  const [limit, setLimit] = useState('26');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = React.useState(new Date());



  const nutrition = {
    nutritionName: item.nutritionName,
    nutritionCategory: item.nutritionCategory,
    fats: item.fats,
    carbohydrates: item.carbohydrates,
    protein: item.protein,
    calories: item.calories,
    discription: [''],
    photos: item.photos.photosUrl

  }
  const time = [{
    sameNutrition: item.id,
    nutrition: nutrition
  }]
  const day = [{
    dayTime: "Dinner",
    time: time,
  }]

  const document = [{
    sameDay: date.toISOString().substring(0, 10),
    day: day

  }];

  const meal = [
    'Breakfast', 'Lunch', 'Dinner'
  ];

  const renderItem = data => (
    <View key={data.text} style={styles.item}>

      <ImageBackground source={data.img} style={{ width: '100%', height: '100%' }}></ImageBackground>

    </View>
  );

  const renderOption = (title) => (


    <SelectItem title={title} />


  );


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 10, margin: 30, textAlign: 'center' }}>{item.nutritionName}</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 10, margin: 30, textAlign: 'center' }}>Days Limit Left: {limit}</Text>
          <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            data={DATAX}

          />

        </View>


        <Chart item={document} />



        



        <View style={{ flexDirection: 'row' }}>



          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
            <Text style={{ color: 'white', fontSize: 19, marginLeft: 70, marginTop: 5 }}>GO BACK</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
}

export default AddDiet;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
  item: {
    width: 330,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',

  },
});