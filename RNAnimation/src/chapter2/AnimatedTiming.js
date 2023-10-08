import React, { useRef } from "react";
import { Animated,Button,Easing,Text } from "react-native";

//Easing ease /back /bounce / elastic / circle
export default function AnimatedTiming (){
    const translateXAnim = useRef(new Animated.Value(-100)).current
    const onPressButton = () =>{
        translateXAnim.setValue(-100)
        Animated.timing()
        Animated.timing(translateXAnim,{
            toValue:100,
            duration:1000,
            delay:0,
            easing:Easing.out(Easing.circle),
            useNativeDriver:true,

        }).start()
    }
    return(
        <>
        <Button title="move" onPress={onPressButton}/>
            <Text>ttt</Text>
            <Animated.Text style={{fontSize:70,transform:[{translateX:translateXAnim}]}}>😃</Animated.Text>
       </>
    )
}