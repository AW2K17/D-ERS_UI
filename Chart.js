import React,{useState} from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Button, View,ScrollView,TextInput,StyleSheet } from 'react-native';
import { Text } from 'react-native-svg';
import {  IndexPath,Datepicker, Layout,  Select, SelectItem } from '@ui-kitten/components';
import Constants from 'expo-constants';


const Chart=()=>{



    const renderOption = (title) => (
     
        
        <SelectItem title={title} />
        
        
      );


      const data2 = [
        'Protein',
        'Fats',
        'Carbs',
      ];

      const meal=[
          'Breakfast','Lunch','Dinner'
      ];

      
      const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
      const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));
      
    
    const [pro,setPro]=useState();
   
        //displayValue--> fats/protein/carbs
        const displayValue = data2[selectedIndex.row]; 
        
        //displayValue2--> breakfast/lunch/dinner
        const displayValue2 = meal[selectedIndex2.row];  
        
  

        









    


        const data = [
            {
                key: 1,
                amount: pro,
                svg: { fill: 'red' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: 'green' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: 'blue' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#d966ff' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data} = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                                          
                    {data.amount}                      
                     </Text>
                )
            })
        }

        return (
            <View>           
            <PieChart
                style={{ height: 200,marginTop:15 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
            <View style={{flexDirection: 'row',marginTop:33}}>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    {data2.map(renderOption)}
                </Select>

                <TextInput style={{backgroundColor:'silver',width:120,marginLeft:6}} placeholder={'Enter Quantity'} onChangeText={setPro}></TextInput>
                
                </View>
                <View style={{marginTop:7}}>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue2}
                    selectedIndex={selectedIndex2}
                    onSelect={index => setSelectedIndex2(index)}>
                    {meal.map(renderOption)}
                </Select>
                </View>

            
            
           
            </View>
 
        )
    }



export default Chart;


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