import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Image, Text, StyleSheet,ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Carousel, { Pagination } from 'react-native-x-carousel';
import { IndexPath, Datepicker, Layout, Select, SelectItem } from '@ui-kitten/components';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






const AddExercise = ({ route, navigation }) => {

  const item = route.params;

  const image = {uri: item.photos.mainPhoto};

  const [limit, setLimit] = useState('26');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [date, setDate] = React.useState(new Date());
  const [sc, setSc] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
        console.log(res);

        if (res.data.schedulee && res.data.schedulee.length) {
          // setSc(res.data.schedulee);
          // console.log(sc);
          axios.get('http://192.168.43.126:3022/api-gateway/current-user/exercise-schedule/count/' + res.data.schedulee[0].id, { withCredentials: true })
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
    { text: '#1', img: image },
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

    <ScrollView >
    <View style={styles.container}>
      <View >
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 10, margin: 20, textAlign: 'center' }}>Days Limit Left: {limit}</Text>
        <Carousel
          pagination={Pagination}
          renderItem={renderItem}
          data={DATA}

        />


      </View>
      <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 10, margin: 20,marginLeft:12, textAlign: 'center' }}>{item.exerciseName}</Text>
        
      {/* <Text>{title}</Text> */}
      <View style={{ flexDirection: 'row',alignItems: 'center'}}>
        <TextInput placeholder='Enter Sets' style={{ width:windowWidth*0.2647, backgroundColor: 'silver', height: 34, marginRight: 6,paddingTop:8,paddingBottom:8,paddingLeft:8 }} onChangeText={setSets} />
        <TextInput placeholder='Enter Reps' style={{ width:windowWidth*0.2647, backgroundColor: 'silver', height: 34, marginLeft: 6,paddingTop:8,paddingBottom:8,paddingLeft:8}} onChangeText={setReps} />
      </View>

      <Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 24, marginTop: 34 }}>Select Date</Text>
      <Layout level='1' style={{ flexDirection: 'row', marginRight: 24, marginTop: 13 }}>

        <Datepicker
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
      </Layout>
      <View style={{ flexDirection: 'row',paddingBottom:170 }}>
        <TouchableOpacity style={{ marginTop: 30, width:windowWidth*0.3647, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}
          onPress={async () => {

            try {
              // .then(response => {
              // console.log(res.data.schedulee[0].id);
              // navigation.navigate('Search');
              // console.log(response);

              const res = await axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
              console.log(res);
              if (res.data.schedulee && res.data.schedulee.length) {
                axios.put('http://192.168.43.126:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { document: document }, { withCredentials: true })
                  .then(response => {
                    // navigation.navigate('Search');
                    console.log(response);
                  }).catch(error => {
                    console.log("Inside put catch ", error);
                  })

              }
              else {
                axios.post('http://192.168.43.126:3021/api-gateway/current-user/exerciseschedule', { document: document }, { withCredentials: true })
                  .then(response => {
                    // navigation.navigate('Search');
                    console.log(response);
                  }).catch(error => {
                    console.log("Inside put catch ", error);
                  })
              }
            }
            catch (er) {
              // axios.post('http://192.168.1.101:3021/api-gateway/current-user/exerciseschedule', { document: document }, { withCredentials: true })
              //   .then(response => {
              //     // navigation.navigate('Search');
              //     console.log(response);
              //   }).catch(error => {
              //     console.log(error);
              //   })
              console.log(er);
            }

            // }).catch(error => {
            //   console.log(error);
            // })
            showMessage({
              message: "Added Successfully, Please Refresh",
              type: "success",
            });

          }}
        >
          <Text style={{ color: 'white', fontSize: 19, marginTop: 5,textAlign:'center'}}>CONFIRM</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width:windowWidth*0.3647, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
          <Text style={{ color: 'white', fontSize: 19,  marginTop: 5,textAlign: 'center' }}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>


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
    width: windowWidth*0.9182,
    height: windowHeight*0.3534,
    alignItems: 'center',
    justifyContent: 'center',

  },
});