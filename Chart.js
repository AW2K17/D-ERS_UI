import React,{useState} from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Button, View,ScrollView,TextInput } from 'react-native';
import { Text } from 'react-native-svg'

const Chart=()=>{

    const [pro,setPro]=useState('');

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
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
            <TextInput value={pro} onChangeText={(text)=>setPro(text)} />
            <Text>Results</Text>
            </View>
 
        )
    }



export default Chart;