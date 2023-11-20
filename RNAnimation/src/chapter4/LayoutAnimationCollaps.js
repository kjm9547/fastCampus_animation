import {LayoutAnimation, SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {collapseData} from '../utils/data';
import { useState } from 'react';
import { presets } from '../../babel.config';

export default function LayoutAnimationCollaps() {
    const [expanded,setExpanded] = useState(false)
    const onPress = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setExpanded(value=>(value === index?undefined:index))
    }
  return (
    <SafeAreaView>
      {collapseData.map((value, index) => {
        return (
          <View key={index}>
            <TouchableWithoutFeedback onPress={()=>{onPress(index)}}>
            <View style={{backgroundColor:'#006aff',padding:20,borderBottomWidth:1,borderBottomColor:'#428df5'}}>
              <Text style={{color:'white',fontSize:14}}>{index+1})  {value.q}</Text>
            </View>
            </TouchableWithoutFeedback>
           {expanded == index&& (
            <View style={{backgroundColor:"#f4f4f4",borderBottomWidth:1, borderBottomColor:'#ddd',padding:10,paddingLeft:40}}>
            <Text>{value.a}</Text>
            </View>
           )}
            
          </View>
        );
      })}
    </SafeAreaView>
  );
}
