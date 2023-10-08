import React, { useRef } from "react"
import { Animated, Button, Text, View } from "react-native"

//y축 -100 100으로 이동하는 스프링 애니메이션
export default function AnimatedSpring (){
    const translateYAnim = useRef(new Animated.Value(-100)).current
    const onButtonPress = ()=>{
        translateYAnim.setValue(-100)
        Animated.spring(translateYAnim,{
            toValue:100,
             bounciness:16, //탄력제어
             speed:12,

            // friction:7,  //에너지소비
            // tension:40,  //스프링이 얼마나 많은 에너지를 가졌는가
            
            // stiffness:100, //스프링의 강도
            // damping:10,    //마찰력
            // mass:1,        // 용수철 끝에 매달려 있는 물체의 질량
            velocity:1,
            useNativeDriver:true

        }).start()
    }
    return(
        <View style={{flexDirection:"row"}}>
            <Button title="SPRING" onPress={onButtonPress}/>
            
            <Animated.Text style={{fontSize:70,
                transform:[{
                    translateY:translateYAnim
                }]
            }}>L</Animated.Text>

        </View>
    )
}