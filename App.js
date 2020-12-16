import React from 'react';
import { StyleSheet,Button, Text,View ,TextInput,Platform,Dimensions,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import Login from './Login';
import WorkoutDetail from './WorkoutDetail';
import Dashboard from './Dashboard';
import SignUpScreen from './SignUpScreen';
import Continue from './Continue';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Questions from './Questions';
import Questions2 from './Questions2';
import Questions3 from './Questions3';
import Questions4 from './Questions4';
import Questions5 from './Questions5';
import { DietScreen } from './DietScreen';
import Signin from './Signin';
import PlanScreen from './Plan';
// import SearchExercise from './SearchExercise';
import AddExercise from './AddExercise';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout} from '@ui-kitten/components';
import SearchScreen from './Search';
import MinicardScreen from './Minicard';




const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <PlanScreen />
  </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },

  
 
});

export default App;
