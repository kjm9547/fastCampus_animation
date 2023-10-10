import { Animated, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { collapseData } from "../utils/data";
import { useRef } from "react";
export default function Collapse (){
    
    return(
        <SafeAreaView style={{flex:1}}>
            {collapseData.map((value,index)=>{
                const interpolateAnim = useRef(new Animated.Value(0)).current
                let isOpend = false
                const onPressButton = () =>{
                    Animated.timing(interpolateAnim,{
                        toValue:isOpend?0:1,
                        duration:200,
                        useNativeDriver:false
                    }).start(()=>{
                        //애니메이션이 끝나면 콜백되는 함수
                        isOpend = !isOpend
                    }) 
                }
                return(
                    <View key={index}>
                        <TouchableWithoutFeedback onPress={onPressButton}>
                        <View style={{
                            backgroundColor:"#4c5ced",
                            padding:20,
                            flexDirection:'row',
                            justifyContent:"space-between",
                            alignItems:"center"
                        }}>
                        <Text style={{color:'yellow',fontWeight:"bold",fontSize:16,flexShrink:1}}>{value.q}</Text>    
                        <Animated.View style={{flexShrink:1,
                            marginLeft:10,
                            transform:[{
                                rotate:interpolateAnim.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['0deg','180deg']
                                })
                            }]
                        
                        }}>
                        <Icon name="expand-more" size={24} color="yellow"/>
                        </Animated.View>
                        
                        </View>
                        </TouchableWithoutFeedback>
                        <Animated.View style={{
                            height:interpolateAnim.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,100]
                            }),
                            paddingHorizontal:40,
                            justifyContent:"center",
                            borderBottomColor:'#4c5ced',
                            borderBottomWidth:1
                        }}>
                        <Text style={{fontSize:14}}>{value.a}</Text>
                        </Animated.View>
                        
                    </View>
                )
            })}
            
        </SafeAreaView>
    )
}