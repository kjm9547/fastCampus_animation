import {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Easing,
  PanResponder,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function PanResponderModal() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:(evt,gestureState)=>{
            if(gestureState.dy>100){
                hideModal()
            }
        }
  })
  const [show, setShow] = useState(false);

  const hideModal = () => {
    
    Animated.timing(interpolateAnim, {
      toValue: 0,
      useNativeDriver: false,
      duration: 500,
      easing: Easing.out(Easing.cubic),
    }).start(({finished})=>{
        if(finished){
            setShow(false)
        }
      });
  };
  const onPressButton = () => {
    setShow(true)
    Animated.timing(interpolateAnim, {
     
        toValue: 1,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }).start()
  };
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 100}}>
        <Button title="show modal" onPress={onPressButton} />
      </View>

      {/* background
                투명한 필름 구현
            */}

      {/* menu content */}
      <>
        {show && (
          <TouchableWithoutFeedback onPress={hideModal}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#00000090',
                opacity: interpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            />
          </TouchableWithoutFeedback>
        )}

        <Animated.View
        {...panResponder.panHandlers}
          style={{
            position: 'absolute',
            bottom: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-500, 0],
            }),
            padding: 20,
            backgroundColor: 'white',
            borderWidth: 1,
            width: '100%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 20,
          }}>
          <ListItem onPress={hideModal} icon="pushpino" title="저장하기" />
          <ListItem onPress={hideModal} icon="hearto" title="좋아요" />
          <ListItem onPress={hideModal} icon="delete" title="삭제하기" />
          <ListItem
            onPress={hideModal}
            color={'#999'}
            icon="back"
            title="닫기"
          />
        </Animated.View>
      </>
    </View>
  );
}

function ListItem({color, icon, title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#f2f2f2',
          borderBottomWidth: 1,
          height: 60,
        }}>
        <Icon name={icon} size={20} color={color} />
        <Text style={{fontSize: 15, marginLeft: 20, color}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
