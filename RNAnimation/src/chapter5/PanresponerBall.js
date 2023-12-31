import { useRef } from "react";
import { Animated, PanResponder, Text, View } from "react-native";

export default function PanResponderBall(){
    const panAnim = useRef(new Animated.ValueXY(0)).current
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:Animated.event([
            null,
            {
                dx:panAnim.x,
                dy:panAnim.y
            }
        ],{
            useNativeDriver:false
        }),
        onPanResponderEnd:(evt,gestureState)=>{
            Animated.decay(panAnim,{
                velocity:{x:gestureState.vx/5,y:gestureState.vy/5},
                deceleration:0.997,
                useNativeDriver:true
            }).start()
        },
        onPanResponderRelease:(evt,gestureState)=>{
            setTimeout(()=>{
                panAnim.setValue({x:0,y:50})
                Animated.spring(panAnim,{
                    toValue:{x:0,y:0},
                    friction:7,
                    tension:30,
                    duration:1000,
                    useNativeDriver:true

                }).start()
            },1000)
        }
    })
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Animated.View 
            {...panResponder.panHandlers}
            style={{
                position:'absolute',
                bottom:20,
                transform:[{translateX:panAnim.x},{translateY:panAnim.y}]
                }}>
                <Text style={{fontSize:150}}>o</Text>
            </Animated.View>
        </View>
    )
}