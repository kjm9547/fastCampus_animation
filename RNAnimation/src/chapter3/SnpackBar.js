import { useRef } from "react";
import { Animated, Button, Easing, SafeAreaView, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/Ionicons'
export default function SnackBar (){
    const translateYAnim = useRef(new Animated.Value(100)).current
    const onPressButton = ()=>{
        Animated.sequence([
            Animated.timing(translateYAnim,{
                toValue:0,
                duration:300,
                easing:Easing.out(Easing.circle),
                useNativeDriver:true
            }),
            Animated.delay(2000),
            Animated.timing(translateYAnim,{
                toValue:100,
                duration:300,
                easing:Easing.in(Easing.circle),
                useNativeDriver:true
            }),
        ]).start()
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <Button title="문제가 발생" onPress={onPressButton}/>
        <Animated.View style={{
            position:'absolute',
            width:'100%',
            bottom:0,
            transform:[
                {
                    translateY: translateYAnim
                }
            ]

    }}>
            <View style={{
                backgroundColor:'#222',
                flexDirection:'row',
                paddingVertical:10,
                paddingHorizontal:20,
                margin:14,
                alignItems:"center"
        }}>
                <Icon name="checkmark-circle" color="white" size={24}/>
                <Text style={{color:'white',fontSize:15,marginLeft:10}}>문제가 발생</Text>
            </View>
        </Animated.View>
        </SafeAreaView>
    )
}