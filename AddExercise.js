import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Carousel, { Pagination } from 'react-native-x-carousel';
import { IndexPath, Datepicker, Layout, Select, SelectItem } from '@ui-kitten/components';
import axios from 'axios';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






const AddExercise = ({ route, navigation }) => {

  const item = route.params;

  const [limit, setLimit] = useState('26');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [date, setDate] = React.useState(new Date());
  const [sc, setSc] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
        console.log(res);

        if (res.data.schedulee) {
          // setSc(res.data.schedulee);
          // console.log(sc);
          axios.get('http://localhost:3022/api-gateway/current-user/exercise-schedule/count/' + res.data.schedulee[0].id, { withCredentials: true })
            .then(response => {
              console.log(response.data.limit);
              setLimit(response.data.limit);
              // setExe(response.data.schedulee[0].document[0].day[0].exercise);
              // console.log(response.data.schedulee[0].document[0].day[0].exercise);
              // setWorkouts(response.data.schedulee[0].document[0].day[0].exercise.photos);
            }
            ).catch(error => {
              console.log(error.response)
            });
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const DATA = [
    { text: '#1', img: item.photos.mainPhoto },
    { text: '#2' },
    { text: '#3' },
  ];
  // console.log(route.params);
  const exercise = {
    exerciseName: item.exerciseName,
    sets: sets,
    reps: [10, 10, 10],
    discription: [''],
    photos: item.photos.photosUrl

  }
  const day = [{
    sameExercise: item.id,
    exercise: exercise,


  }]
  const document = [{
    sameDay: date.toISOString().substring(0, 10),
    day: day

  }];
  // console.log(document);

  const renderItem = data => (
    <View key={data.text} style={styles.item}>

      <ImageBackground source={data.img} style={{ width: '100%', height: '100%' }}></ImageBackground>

    </View>
  );


  return (

    <View style={styles.container}>
      <View style={{ marginTop: -260 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 10, margin: 30, textAlign: 'center' }}>{item.exerciseName}</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 10, margin: 30, textAlign: 'center' }}>Days Limit Left: {limit}</Text>
        <Carousel
          pagination={Pagination}
          renderItem={renderItem}
          data={DATA}

        />

      </View>
      {/* <Text>{title}</Text> */}
      <View style={{ flexDirection: 'row', marginTop: 33 }}>
        <TextInput placeholder='Enter Sets' style={{ width: 130, backgroundColor: 'silver', height: 24, marginRight: 6 }} onChangeText={setSets} />
        <TextInput placeholder='Enter Reps' style={{ width: 130, backgroundColor: 'silver', height: 24, marginLeft: 6 }} onChangeText={setReps} />
      </View>

      <Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 24, marginTop: 34 }}>Select Date</Text>
      <Layout level='1' style={{ flexDirection: 'row', marginRight: 24, marginTop: 13 }}>

        <Datepicker
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
      </Layout>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}
          onPress={async () => {

            try {
              // .then(response => {
              // console.log(res.data.schedulee[0].id);
              // navigation.navigate('Search');
              // console.log(response);

              const res = await axios.get('http://localhost:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
              console.log(res);
              if (res.data.schedulee) {
                axios.put('http://localhost:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { document: document }, { withCredentials: true })
                  .then(response => {
                    // navigation.navigate('Search');
                    console.log(response);
                  }).catch(error => {
                    console.log(error);
                  })

              }
              else {
                axios.post('http://localhost:3021/api-gateway/current-user/exerciseschedule', { document: document }, { withCredentials: true })
                  .then(response => {
                    // navigation.navigate('Search');
                    console.log(response);
                  }).catch(error => {
                    console.log(error);
                  })
              }
            }
            catch (er) {
              axios.post('http://localhost:3021/api-gateway/current-user/exerciseschedule', { document: document }, { withCredentials: true })
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

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
          <Text style={{ color: 'white', fontSize: 19, marginLeft: 70, marginTop: 5 }}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
}

export default AddExercise;



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