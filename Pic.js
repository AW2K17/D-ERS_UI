import React from 'react';

 
import { Platform, StyleSheet, View, Image ,Dimensions,Text,ImageBackground} from 'react-native';

const windowWidth = Dimensions.get('window').width;
 
const Pic=()=>{
    
    
 
      return (
    
          <View style={styles.MainContainer}>
 
            <ImageBackground style={{ position:'absolute',top:40,left:0,right:0,bottom:0,justifyContent:'center'}}>
                        <Text >Han Bhai </Text>
            <Image 
              source = {{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
 
              style = {{width: windowWidth, height: 300, opacity: .2}} />
            </ImageBackground>
                
        </View>


      
        




        

          
              
      );
    
   }


   export default Pic;
    
   const styles = StyleSheet.create({
    
   MainContainer :{
 
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   paddingTop: (Platform.OS) === 'android' ? 20 : 0
    
   }
    
   });