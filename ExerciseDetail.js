import * as React from 'react';
import { Button, View, Text,ImageBackground,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel, { Pagination } from 'react-native-x-carousel';


const ExerciseDetail=()=>{

 const DATA = [
    { text: '#1',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JiJjMN0FxsMjbkF71oiifRE7xyR6Ek0oog&usqp=CAU' },
    { text: '#2',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCAy0fD5jG9bwpGhExgKQICjyLaO0xdJgGA&usqp=CAU' },
    { text: '#3' },
  ];
  
  const [sets, setSets] = React.useState(3);
  const [reps, setReps] = React.useState(10);
  

    const renderItems = data => (
    <View key={data.text} >
      <Text>{data.text}</Text>
      <ImageBackground source={data.img} style={{ width: '100%', height: '100%' }}></ImageBackground>
   

    </View>
  );





return(
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Carousel
          pagination={Pagination}
          renderItem={renderItems}
          data={DATA}

        />
        <Text>Sets</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setSets(text)}
      value={sets}
    />
     <Text>Reps</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setReps(text)}
      value={reps}
    />

    <Button title="Update" />
    </View>
);

}

export default ExerciseDetail;
