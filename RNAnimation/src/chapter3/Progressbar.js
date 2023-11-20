import React, { useRef } from "react";
import { Animated, Button, Easing, SafeAreaView, Text, View } from "react-native";
export default function Progressbar(){
    const interplateAnim = useRef(new Animated.Value(0)).current
    let clickCount = 0;
    //수동으로 20%씩 채워 100%까지 채워주는 역활
    const onRunPress = () =>{
        if(clickCount < 5){
            clickCount = clickCount+1
        }
        Animated.spring(interplateAnim,{
            toValue:20*clickCount,
            friction:7,
            tension:40,
            useNativeDriver:false,
        }).start()
    }
    //자동으로 100%까지, 중간중간 멈추는 액션 추가
    const onAutoPress = () =>{
        Animated.sequence([
           
            Animated.timing(interplateAnim,{
                toValue:100,
                friction:7,
                tension:40,
                delay:150,
                useNativeDriver:false,
            })
        ]).start()
    }
    
    //맨 처음 값으로 되돌아가는 액션
    const onResetPress = () =>{
        clickCount = 0
        interplateAnim.flattenOffset()
        Animated.timing(interplateAnim,{
            toValue:0,
            easing:Easing.out(Easing.circle),
            useNativeDriver:false,
        }).start()
    }
    return(
        <SafeAreaView style={{flex:1,marginTop: 100}}>
            <Button title="run" onPress={onRunPress}/>
            <Button title="auto" onPress={onAutoPress}/>
            <Button title="reset" onPress={onResetPress}/>
            <View style={{position:"relative",margin:30,justifyContent:"center"}}>
                {/* 로딩바 배경 */}
                <View style={{backgroundColor:"#222", height:10,borderRadius:10}}> 

                </View>
                {/* 로딩바 */}
                <Animated.View 
                style={{backgroundColor:'blue',
                height:16,
                 position:"absolute",
                  width:interplateAnim.interpolate({
                    inputRange:[0,100],
                    outputRange:['0%','100%'],
                  }),
                  borderRadius:100}}>

                </Animated.View>
            </View>
            <Text>Progressbar</Text>
        </SafeAreaView>
    )
}