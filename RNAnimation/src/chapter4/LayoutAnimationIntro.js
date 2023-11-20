import {useState} from 'react';
import {Button, LayoutAnimation, Platform, Text, UIManager, View} from 'react-native';

if(Platform.OS ==="android"){
    if(UIManager.setLayoutAnimationEnabledExperimental){
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}
export default function LayoutAnimationIntro() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const onButtonPress = () => {
    LayoutAnimation.configureNext(
        {
          duration:300,
          //type : easeIn, spring, linear
          //property: opacity, scaleX, scaleY, scaleXY

          create:{type:'easeIn',property:"opacity"},
          delete:{type:'spring',property:'scaleX', springDamping:0.3},
          update:{type:'linear',property:'scaleXY'}  
        },
        ()=> console.log('end'),
        ()=> console.log('fail')
        
    )
    setCount(value => value *10)
    setShow(value => !value)
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Layout animation 작동!" onPress={onButtonPress}/>
        <View style={{width:250,height:250}}>
      <View style={{backgroundColor: 'orange'}}>
        <Text style={{fontSize: 50}}>{count}</Text>
        </View>
        <View>
          {show && (
            <View style={{backgroundColor: 'green',marginTop:10}}>
              <Text style={{fontSize: 50}}>보이는컴포턴트</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
