import React from 'react';
import { StyleSheet,Text, View,FlatList,Image,Dimensions,ScrollView} from 'react-native';
import {Card} from 'react-native-paper';

const pic1={uri:'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg'}
const pic2={uri:'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/10/legs-workout.jpg?itok=is2aOfCU&timestamp=1539950429'}
const pic3={uri:'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all'}
const pic4={uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNmnw4Jmf0ROUymyfmbYu2RX8YWpX6vWsKYQ&usqp=CAU'}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const HistoryScreen = () => {
    
    const meals=[
        {pic:pic1,
        date:'12 Nov 2020'},
            
        {pic:pic1,
        date:'13 Nov 2020'},
        
        {pic:pic1,
        date:'14 Nov 2020'},
        
        {pic:pic1,
        date:'12 Nov 2020'}
                               
    ]
    
    
    
    
    return (
        <View style={styles.container}>
        <ScrollView>
            <Card style={{paddingTop:35,paddingBottom:35,width:windowWidth,marginTop:42}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={pic1} style={{width:100,height:80,marginLeft:7}}/>
                <Text style={{fontSize:20,marginLeft:55,fontWeight: 'bold'}}>Chest Workout{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>Completed On</Text>{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>12th Nov 2020</Text></Text>
                </View>
            </Card>

            <Card style={{paddingTop:35,paddingBottom:35,width:windowWidth,marginTop:30}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={pic2} style={{width:100,height:80,marginLeft:7}}/>
                <Text style={{fontSize:20,marginLeft:55,fontWeight: 'bold'}}>Legs Workout{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>Completed On</Text>{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>13th Nov 2020</Text></Text>
                </View>
            </Card>
            
            <Card style={{paddingTop:35,paddingBottom:35,width:windowWidth,marginTop:30}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={pic3} style={{width:100,height:80,marginLeft:7}}/>
                <Text style={{fontSize:20,marginLeft:55,fontWeight: 'bold'}}>Bicep Workout{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>Completed On</Text>{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>14th Nov 2020</Text></Text>
                </View>
            </Card>

            <Card style={{paddingTop:35,paddingBottom:35,width:windowWidth,marginTop:30}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={pic4} style={{width:100,height:80,marginLeft:7}}/>
                <Text style={{fontSize:20,marginLeft:55,fontWeight: 'bold'}}>Tricep Workout{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>Completed On</Text>{"\n"}<Text style={{fontSize:15,fontWeight:'normal'}}>16th Nov 2020</Text></Text>
                </View>
            </Card>
        
            </ScrollView>
        </View>
    );
}

export default HistoryScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});