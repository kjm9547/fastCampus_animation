import React,{useRef} from "react"
import { Animated, Button, Text, View } from "react-native"

export default function AnimatedDecay(){
    const translateXAnim = useRef(new Animated.Value(-100)).current
    const onPress =()=> {
        Animated.decay(translateXAnim,{
            velocity:1,
            deceleration:0.992,
            useNativeDriver:true
        }).start()
    }
    return(
        <>
            <Button title="click" onPress={onPress}/>
            <Animated.Text style={{fontSize:70,transform:[{translateX:translateXAnim}]}}>T</Animated.Text>

        </>
    )
}