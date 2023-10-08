import React, { useRef } from "react";
import { Animated, Button } from "react-native";

export default function AnimatedProperty(){
    const heightAnim = useRef(new Animated.Value(100)).current
    const onPress = () => {
        Animated.timing(heightAnim,{
            toValue:200,
            useNativeDriver:false
        }).start()
    }
    return(
        <>
        <Button title="click" onPress={onPress}/>
        <Animated.View style={{width:100,height:heightAnim,backgroundColor:heightAnim.interpolate
          //컬러변경
        ({inputRange:[100,180,200],outputRange:['#ffa100','red','blue']}),
        transform:[{rotate:heightAnim.interpolate({inputRange:[100,200],outputRange:['0deg','360deg']})}]
    }}>

        </Animated.View>
        </>
    )
}