import React, { useRef } from "react"
import { Animated, Button, View } from "react-native"

// sequence, delay, parallel, stragger
// sequence함수 = 결합 시 사용되는데 비동기 함수를 동기적으로 움직이게 해줌
// parallel 애니메이션을 묶는 역활
// 1) y-200 => 0 timing
// 2) x 0 => 100 timing
export default function AnimatedComposing () {
    const translateXAnim = useRef(new Animated.Value(0)).current
    const translateYAnim = useRef(new Animated.Value(-200)).current
    
    const onPressButton = () => {
        Animated.sequence([
            Animated.timing(translateYAnim,{
                toValue:0,
                useNativeDriver:true
            }),
            Animated.delay(1000),
            Animated.timing(translateXAnim,{
                toValue:100,
                useNativeDriver:true
            })
        ]).start()
       

    }
    return(
        <>
        <Button title="click" onPress={onPressButton}/>
        <Animated.Text style={{
            fontSize:70,
            transform:[
                {
                    translateX:translateXAnim
                },
                {
                    translateY: translateYAnim
                }
            ]
        }}>
            L
        </Animated.Text>
        </>
    )
}