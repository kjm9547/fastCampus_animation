import React,{ useState } from 'react';
import {PanResponder, Text, View} from 'react-native';

export default function PanresponderIntro() {
    const [status,setStatus] = useState({
        dx:0,
        dy:0,
        moveX:0, //제일 최근에 찍힌 좌표
        moveY:0,
        vx:0, //제스쳐의 속도
        vy:0,
        x0:0, // 터치 시작점
        y0:0
    })
  const panResponder = PanResponder.create({
    //permission method
    onStartShouldSetPanResponder:() => true,
    onMoveShouldSetPanResponder: ()=>true,
    //respon method
    onPanResponderGrant:()=>{},
    onPanResponderReject:()=>{},
    //handler method
    onPanResponderStart:(evt,gestureState)=>{
        console.log(gestureState)
        
        setStatus({x0:gestureState.x0,y0:gestureState.y0})
    },
    onPanResponderMove:(evt,gestureState)=> {
        setStatus({...gestureState, x0:status.x0,y0:status.y0})
    },
    onPanResponderEnd:()=>{},
    onPanResponderRelease:()=>{},
  });


  const moveXSize = Math.floor(status.moveX - status.x0)
  return (
    <View
    {...panResponder.panHandlers}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa100',
      }}>
      <Text>{moveXSize}만큼 오른쪽으로 이동중</Text>
      <View style={{position:'absolute',bottom:70,left:10}}>
        <Text>{status.dx}</Text>
        <Text>{status.dy}</Text>
        <Text>{status.moveX}</Text>
        <Text>{status.moveY}</Text>
        <Text>{status.vx}</Text>
        <Text>{status.vy}</Text>
        <Text>{status.x0}</Text>
        <Text>{status.y0}</Text>
      </View>
    </View>
  );
}
