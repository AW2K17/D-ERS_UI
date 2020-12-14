import React,{useState} from 'react';
import { StyleSheet,SafeAreaView, Text,View ,TextInput,Platform,Dimensions,TouchableOpacity,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic ={uri:'https://www.linkpicture.com/q/log2.jfif'};


const Login2 = () => {
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
  
  
  
  return (
    
    
    
    <SafeAreaView style={styles.container}> 
        
      
      <ImageBackground style={styles.header} source={pic}>
          <Text style={{fontSize:50,marginTop:100,fontWeight:'bold',color:'white'}}>D&ERS</Text>
          
          <View style={{ flexDirection: 'row',borderBottomWidth:1,borderBottomColor:'#EDDDDF'}}>
          <FontAwesome name="user-o" size={24} color="#EDDDDF" style={{ marginTop:70}} />
          <TextInput placeholder='Email'  placeholderTextColor="#EDDDDF" style={styles.inner1} onChangeText={email=>setEmail(email)} />
          </View>
          
          <View style={{ flexDirection: 'row',borderBottomWidth:1,borderBottomColor:'#EDDDDF'}}>
          <Feather name="lock" size={24} color="#EDDDDF"  style={{ marginTop:70}} />
          <TextInput placeholder='Password' placeholderTextColor="#EDDDDF" secureTextEntry={true} style={styles.inner2} onChangeText={password=>setPassword(password)} />
          </View>

          <TouchableOpacity 
           onPress={() => {

            const ran={
  
             email: email,
             password: password

}



        axios.post('https://localhost:3010//api-gateway/sign-in/user',ran).then(response => {
        console.log(response.data);
        navigation.navigate('Dashboard');

        }).catch(error => {
        console.log(error);
        })
        }}
          
          
          
          
          
          
          >
          <View style={styles.Btn}>
            <Text style={{color: 'white',fontSize:15}}>LOGIN</Text>
          </View>
          </TouchableOpacity>

          <Text style={{color: 'white',fontSize:18,marginTop:30}}>Or Join With</Text>


          <View style={{ flexDirection: 'row',marginTop:28}}>
            
          <View style={styles.FB}>
            <Text style={{color: 'white',fontSize:15,marginRight:10}}>Facebook</Text>
            <FontAwesome name="facebook" size={24} color="white" />
          </View>
          <View style={styles.Google}>
            <Text style={{color: 'white',fontSize:15,marginRight:16}}>Google</Text>
            <FontAwesome name="google" size={24} color="white" />
          </View>
            
          </View>

          <Text style={{color: 'white',fontSize:14,marginTop:22}}>Don't Have An Account?
           <Text style={{fontWeight:'bold'}} >  Create Here</Text>
           </Text>
      </ImageBackground>
      
    </SafeAreaView>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    paddingTop: Constants.statusBarHeight,
    
  },

  header:{

    flex:1,
    width:windowWidth,
    alignItems: 'center',
    height:windowHeight,
   
  
    
   
   
  },

 inner1:{

  
  marginTop:70,
  width:203,
  marginLeft:10,
  color: 'white'
 },
 
 
 inner2:{

 
  marginTop:70,
  width:203,
  marginLeft:10,
  color: 'white',
 
 },

 Btn:{

  marginTop:70,
  borderRadius:20,
  width:244,
  backgroundColor:'#BF243D',
  alignItems:'center',
  padding:10,
 },

 FB:{

  width:120,
  backgroundColor:'#0D1E82',
  padding:10,
  marginRight:28,
  flexDirection:'row',
 

 },

 Google:{

  width:120,
  backgroundColor:'#BF4811',
  padding:10,
  flexDirection:'row',
  

 }
 

 
});

export default Login2;
