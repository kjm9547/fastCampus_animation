import React, { useRef } from "react";
import { Animated, Button } from "react-native";

export default function AnimatedComponents() {
    const opacityAnim = useRef(new Animated.Value(1)).current
    const onPressButton = () => {
        Animated.timing(opacityAnim,{
            toValue:0,
            useNativeDriver:true    //brige를 통해 네이티브에 데이터를 전달 그러나 원활하지 못한 경우 발생 따라서 트루로 설정함으로 미리 보내주고 부하를 줄인다.
        }).start()
    }
    return(
        <>
        <Button title="fade" onPress={onPressButton}/>

        
        <Animated.Text style={{fontSize:70,opacity:opacityAnim}}>😃</Animated.Text>
        </>
    )
}