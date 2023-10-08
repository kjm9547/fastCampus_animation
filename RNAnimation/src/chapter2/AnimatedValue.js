import React, { useRef,useEffect } from "react";
import { Animated,Text,Button } from "react-native";
export default function AnimatedValue (){
    const translateXAnim = useRef(new Animated.Value(-100)).current

    useEffect(()=>{
        return()=> translateXAnim.removeAllListeners()
    },[])
    const onPressButton = () =>{
        translateXAnim.setValue(-100)
        translateXAnim.addListener(({value})=>console.log(value))
        
        Animated.timing(translateXAnim,{
            toValue:100,
            useNativeDriver:true,

        }).start()
    }
    return (
    <>
    <Button title="move" onPress={onPressButton}/>
    <Animated.Text style={{fontSize:70,transform:[{translateX:translateXAnim}]}}>😃</Animated.Text>
    </>
    )
}